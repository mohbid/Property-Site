(function() {
  const collectionName = window.KEYLINE_CMS_COLLECTION || "properties";
  const adminUid = window.KEYLINE_ADMIN_UID || "";

  const loginPanel = document.getElementById("loginPanel");
  const editorPanel = document.getElementById("editorPanel");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const saveMessage = document.getElementById("saveMessage");
  const propertyForm = document.getElementById("propertyForm");
  const propertyListAdmin = document.getElementById("propertyListAdmin");
  const docIdLabel = document.getElementById("docIdLabel");
  const newPropertyButton = document.getElementById("newPropertyButton");
  const seedCliftonButton = document.getElementById("seedCliftonButton");
  const signOutButton = document.getElementById("signOutButton");
  const resetPasswordButton = document.getElementById("resetPasswordButton");

  let activeDocId = "";
  let unsubscribe = null;

  if (!window.firebase || !window.KEYLINE_FIREBASE_CONFIG) {
    loginMessage.textContent = "Firebase is not available. Check firebase-config.js.";
    return;
  }

  if (!window.firebase.apps.length) {
    window.firebase.initializeApp(window.KEYLINE_FIREBASE_CONFIG);
  }

  const auth = window.firebase.auth();
  const database = window.firebase.firestore();

  function slugifyTitle(title) {
    return String(title || "property")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function splitImages(value) {
    return String(value || "")
      .split(/\n|,/)
      .map(function(item) {
        return item.trim();
      })
      .filter(Boolean);
  }

  function setValue(id, value) {
    const input = document.getElementById(id);
    if (input) {
      input.value = value || "";
    }
  }

  function fillForm(property) {
    const data = property || {};
    activeDocId = data.id || slugifyTitle(data.title || "");
    docIdLabel.textContent = activeDocId ? collectionName + "/" + activeDocId : collectionName + "/new";

    setValue("titleInputAdmin", data.title);
    setValue("locationInputAdmin", data.location);
    setValue("addressInputAdmin", data.address);
    setValue("priceInputAdmin", data.price);
    setValue("bedroomsInputAdmin", data.bedrooms);
    setValue("bathroomsInputAdmin", data.bathrooms);
    setValue("typeInputAdmin", data.type || "Apartment");
    setValue("statusInputAdmin", data.status || "For sale");
    setValue("descriptionInputAdmin", data.description);
    setValue("imagesInputAdmin", (data.images || data.gallery || [data.image]).filter(Boolean).join("\n"));
    setValue("labelInputAdmin", data.label);
    setValue("areaInputAdmin", data.area);
    setValue("tenureInputAdmin", data.tenure);
    setValue("epcInputAdmin", data.epc);
    setValue("councilTaxInputAdmin", data.councilTax);
    setValue("agentInputAdmin", data.agent);
    setValue("phoneInputAdmin", data.phone);
  }

  function collectProperty() {
    const images = splitImages(document.getElementById("imagesInputAdmin").value);
    const title = document.getElementById("titleInputAdmin").value.trim();
    const id = activeDocId || slugifyTitle(title);

    return {
      id: id,
      title: title,
      location: document.getElementById("locationInputAdmin").value.trim(),
      address: document.getElementById("addressInputAdmin").value.trim(),
      price: Number(document.getElementById("priceInputAdmin").value),
      bedrooms: Number(document.getElementById("bedroomsInputAdmin").value),
      bathrooms: Number(document.getElementById("bathroomsInputAdmin").value),
      type: document.getElementById("typeInputAdmin").value,
      status: document.getElementById("statusInputAdmin").value,
      images: images,
      gallery: images,
      image: images[0] || "",
      description: document.getElementById("descriptionInputAdmin").value.trim(),
      label: document.getElementById("labelInputAdmin").value.trim() || "New instruction",
      area: document.getElementById("areaInputAdmin").value.trim() || "Size TBC",
      tenure: document.getElementById("tenureInputAdmin").value.trim() || "Tenure TBC",
      epc: document.getElementById("epcInputAdmin").value.trim() || "TBC",
      councilTax: document.getElementById("councilTaxInputAdmin").value.trim() || "TBC",
      agent: document.getElementById("agentInputAdmin").value.trim() || "Sarah Khan",
      phone: document.getElementById("phoneInputAdmin").value.trim() || "020 1234 5678",
      added: "Updated recently",
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };
  }

  function renderProperties(snapshot) {
    propertyListAdmin.innerHTML = "";

    if (snapshot.empty) {
      propertyListAdmin.innerHTML = "<p>No Firebase properties yet. Load Clifton example, then publish.</p>";
      return;
    }

    snapshot.forEach(function(documentSnapshot) {
      const property = Object.assign({ id: documentSnapshot.id }, documentSnapshot.data());
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = property.title + " · " + (property.location || "No location");
      button.className = documentSnapshot.id === activeDocId ? "active" : "";
      button.addEventListener("click", function() {
        fillForm(property);
        renderProperties(snapshot);
      });
      propertyListAdmin.appendChild(button);
    });
  }

  function watchProperties() {
    if (unsubscribe) {
      unsubscribe();
    }

    unsubscribe = database.collection(collectionName)
      .orderBy("title")
      .onSnapshot(renderProperties, function(error) {
        saveMessage.textContent = error.message;
      });
  }

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    loginMessage.textContent = "Signing in...";

    auth.signInWithEmailAndPassword(
      document.getElementById("adminEmail").value,
      document.getElementById("adminPassword").value
    ).catch(function(error) {
      loginMessage.textContent = error.message;
    });
  });

  resetPasswordButton.addEventListener("click", function() {
    const email = document.getElementById("adminEmail").value.trim();

    if (!email) {
      loginMessage.textContent = "Enter your email first, then send the reset email.";
      return;
    }

    loginMessage.textContent = "Sending password reset email...";

    auth.sendPasswordResetEmail(email)
      .then(function() {
        loginMessage.textContent = "Password reset email sent to " + email + ". Check your inbox.";
      })
      .catch(function(error) {
        loginMessage.textContent = error.message;
      });
  });

  auth.onAuthStateChanged(function(user) {
    const isAdmin = Boolean(user && user.uid === adminUid);

    loginPanel.classList.toggle("hidden", isAdmin);
    editorPanel.classList.toggle("hidden", !isAdmin);

    if (!user) {
      loginMessage.textContent = "Use the Firebase Auth account you created for Keyline.";
      return;
    }

    if (!isAdmin) {
      loginMessage.textContent = "This account is signed in, but it is not the approved Keyline editor.";
      auth.signOut();
      return;
    }

    saveMessage.textContent = "Signed in as " + (user.email || "Keyline editor") + ".";
    watchProperties();
  });

  propertyForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const property = collectProperty();
    const documentId = property.id || slugifyTitle(property.title);

    saveMessage.textContent = "Publishing " + property.title + "...";

    database.collection(collectionName).doc(documentId).set(property, { merge: true })
      .then(function() {
        activeDocId = documentId;
        docIdLabel.textContent = collectionName + "/" + documentId;
        saveMessage.textContent = "Published to Firestore: " + collectionName + "/" + documentId;
      })
      .catch(function(error) {
        saveMessage.textContent = error.message;
      });
  });

  newPropertyButton.addEventListener("click", function() {
    activeDocId = "";
    propertyForm.reset();
    docIdLabel.textContent = collectionName + "/new";
    saveMessage.textContent = "Ready for a new property.";
  });

  seedCliftonButton.addEventListener("click", function() {
    fillForm({
      id: "clifton-crescent-apartment",
      title: "Clifton Crescent Apartment",
      location: "Bristol",
      address: "Royal York Crescent, Clifton, BS8",
      price: 695000,
      bedrooms: 2,
      bathrooms: 2,
      type: "Apartment",
      status: "For sale",
      images: [
        "assets/images/clifton-crescent-ai.png",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=900&q=80"
      ],
      description: "A refined Clifton apartment with tall sash windows, generous room proportions and views across a classic Georgian crescent.",
      label: "Period view",
      area: "1,020 sq ft",
      tenure: "Leasehold - 121 years",
      epc: "C",
      councilTax: "Band E",
      agent: "Miles Carter",
      phone: "0117 555 0195"
    });
    saveMessage.textContent = "Clifton example loaded. Click Publish to Firebase.";
  });

  signOutButton.addEventListener("click", function() {
    auth.signOut();
  });
})();
