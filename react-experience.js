(function() {
  const root = document.getElementById("reactExperienceRoot");

  if (!root) {
    return;
  }

  if (!window.React || !window.ReactDOM || !window.KeylineCMS) {
    root.innerHTML = [
      '<div class="react-loading">',
      '<p class="eyebrow">Property studio</p>',
      '<p>The interactive studio is loading. The listings below are still available.</p>',
      '</div>'
    ].join("");
    return;
  }

  const h = window.React.createElement;
  const api = window.KeylineCMS;
  const moodOptions = ["Period", "Garden", "Water", "City"];
  const defaultForm = {
    title: "Clifton Crescent Penthouse",
    location: "Bristol",
    price: "825000",
    bedrooms: "2",
    bathrooms: "2",
    type: "Apartment",
    image: "assets/images/clifton-crescent-ai.png",
    description: "An elevated Clifton apartment concept with period proportions, soft daylight and a composed gallery story.",
    aiBrief: ""
  };

  function clamp(number, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, number));
  }

  function getGallery(property) {
    if (property && Array.isArray(property.gallery) && property.gallery.length) {
      return property.gallery;
    }

    return property && property.image ? [property.image] : [api.fallbackImage];
  }

  function scoreProperty(property, budget, bedrooms, mood) {
    const overBudget = Math.max(0, property.price - budget);
    const budgetPenalty = Math.min(42, overBudget / 18000);
    const bedroomPenalty = Math.max(0, bedrooms - property.bedrooms) * 12;
    const tags = (property.tags || []).join(" ").toLowerCase();
    const moodBoost = property.mood === mood || tags.includes(mood.toLowerCase()) ? 18 : 0;
    const freshBoost = String(property.imageMode || "").toLowerCase().includes("concept") ? 4 : 0;

    return Math.round(clamp(78 - budgetPenalty - bedroomPenalty + moodBoost + freshBoost, 12, 99));
  }

  function getGalleryNote(property) {
    if (property.title && property.title.indexOf("Clifton") !== -1) {
      return "A refined gallery direction built around crescent views, period proportions and calm interior detail.";
    }

    return "A polished image set chosen to make the home easier to scan before a viewing.";
  }

  function StatusPill(props) {
    return h("div", { className: "stack-pill" }, [
      h("span", { key: "label" }, props.label),
      h("strong", { key: "value" }, props.value)
    ]);
  }

  function KeylineExperience() {
    const React = window.React;
    const [properties, setProperties] = React.useState(api.getProperties());
    const [selectedId, setSelectedId] = React.useState(function() {
      const clifton = api.getProperties().find(function(property) {
        return property.title.indexOf("Clifton") !== -1;
      });
      return clifton ? clifton.id : api.getProperties()[0].id;
    });
    const [budget, setBudget] = React.useState(700000);
    const [bedrooms, setBedrooms] = React.useState(2);
    const [mood, setMood] = React.useState("Period");
    const [tab, setTab] = React.useState("discover");
    const [activeImage, setActiveImage] = React.useState("");
    const [stack, setStack] = React.useState(api.getStackStatus());
    const [authStatus, setAuthStatus] = React.useState(api.getAuthStatus());
    const [login, setLogin] = React.useState({
      email: "abdmoh2900@gmail.com",
      password: ""
    });
    const [syncMessage, setSyncMessage] = React.useState("Listing manager ready");
    const [form, setForm] = React.useState(defaultForm);

    const selected = React.useMemo(function() {
      return properties.find(function(property) {
        return property.id === selectedId;
      }) || properties[0];
    }, [properties, selectedId]);

    const matches = React.useMemo(function() {
      return properties
        .map(function(property) {
          return Object.assign({}, property, {
            matchScore: scoreProperty(property, budget, bedrooms, mood)
          });
        })
        .sort(function(first, second) {
          return second.matchScore - first.matchScore;
        });
    }, [properties, budget, bedrooms, mood]);

    React.useEffect(function() {
      function refresh(event) {
        const nextProperties = event.detail && event.detail.properties ? event.detail.properties : api.getProperties();
        setProperties(nextProperties);
        setStack(api.getStackStatus());
        setAuthStatus(api.getAuthStatus());
      }

      function refreshAuth(event) {
        setAuthStatus(event.detail || api.getAuthStatus());
        setStack(api.getStackStatus());
      }

      window.addEventListener("keyline:properties-updated", refresh);
      window.addEventListener("keyline:auth-updated", refreshAuth);
      return function() {
        window.removeEventListener("keyline:properties-updated", refresh);
        window.removeEventListener("keyline:auth-updated", refreshAuth);
      };
    }, []);

    React.useEffect(function() {
      const gallery = getGallery(selected);
      setActiveImage(gallery[0]);
    }, [selected && selected.id]);

    function updateForm(field, value) {
      setForm(function(current) {
        return Object.assign({}, current, { [field]: value });
      });
    }

    function updateLogin(field, value) {
      setLogin(function(current) {
        return Object.assign({}, current, { [field]: value });
      });
    }

    function buildBrief() {
      const brief = api.buildImageBrief({
        title: form.title,
        location: form.location,
        type: form.type,
        description: form.description
      });
      updateForm("aiBrief", brief);
    }

    function publishDraft(event) {
      event.preventDefault();

      if (!api.getAuthStatus().isAdmin) {
        setSyncMessage("Sign in to manage listings before publishing live changes.");
        return;
      }

      setSyncMessage("Publishing listing update...");

      api.publishProperty({
        title: form.title,
        location: form.location,
        address: form.location,
        label: "Listing launch",
        price: Number(form.price),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        area: "Size TBC",
        type: form.type,
        status: "For sale",
        tenure: "Tenure TBC",
        epc: "TBC",
        councilTax: "TBC",
        added: "Added from studio",
        agent: "Sarah Khan",
        phone: "020 1234 5678",
        image: form.image || api.fallbackImage,
        gallery: form.image ? [form.image] : undefined,
        description: form.description,
        aiBrief: form.aiBrief,
        cmsStatus: "Listing update published"
      }).then(function(result) {
        setProperties(api.getProperties());
        setSelectedId(result.property.id);
        setStack(api.getStackStatus());
        setSyncMessage(result.firebase.ok ? "Published to the live catalogue." : "Saved in this browser. Sign in to publish live.");
        setTab("discover");
      }).catch(function(error) {
        setSyncMessage(error.message);
      });
    }

    function signIn(event) {
      event.preventDefault();
      setSyncMessage("Signing in...");

      api.signInAdmin(login.email, login.password).then(function(status) {
        setAuthStatus(status);
        setStack(api.getStackStatus());
        setSyncMessage("Signed in as " + status.email + ".");
        updateLogin("password", "");
      }).catch(function(error) {
        setSyncMessage(error.message);
      });
    }

    function signOut() {
      api.signOutAdmin().then(function(status) {
        setAuthStatus(status);
        setStack(api.getStackStatus());
        setSyncMessage("Signed out.");
      });
    }

    function syncRest() {
      setSyncMessage("Checking the backup listing source...");
      api.syncPropertiesFromRest().then(function(result) {
        setProperties(result.properties);
        setStack(api.getStackStatus());
        setSyncMessage("Listings refreshed.");
      }).catch(function(error) {
        setSyncMessage(error.message);
      });
    }

    function syncFirebase() {
      setSyncMessage("Reading live listings...");
      api.syncPropertiesFromFirebase().then(function(result) {
        setProperties(result.properties);
        setStack(api.getStackStatus());
        setSyncMessage("Live listings refreshed.");
      }).catch(function(error) {
        setSyncMessage(error.message);
      });
    }

    if (!selected) {
      return h("div", { className: "react-loading" }, "No properties loaded.");
    }

    const gallery = getGallery(selected);
    const monthlyPayment = api.calculateMonthlyPayment(selected.price);
    const activity = api.getActivity();
    const selectedScore = scoreProperty(selected, budget, bedrooms, mood);

    return h("div", { className: "experience-shell" }, [
      h("aside", { key: "control", className: "experience-panel" }, [
        h("div", { key: "status", className: "stack-grid" }, [
          h(StatusPill, { key: "match", label: "Match", value: selectedScore + "%" }),
          h(StatusPill, { key: "gallery", label: "Gallery", value: gallery.length + " images" }),
          h(StatusPill, { key: "cost", label: "Estimate", value: api.formatPrice(monthlyPayment) }),
          h(StatusPill, { key: "viewing", label: "Viewing", value: "Bookable" })
        ]),
        h("div", { key: "preferences", className: "preference-box" }, [
          h("label", { key: "budget" }, [
            h("span", { key: "label" }, "Budget " + api.formatPrice(budget)),
            h("input", {
              key: "input",
              type: "range",
              min: "175000",
              max: "1200000",
              step: "25000",
              value: budget,
              onChange: function(event) {
                setBudget(Number(event.target.value));
              }
            })
          ]),
          h("label", { key: "bedrooms" }, [
            h("span", { key: "label" }, bedrooms + "+ bedrooms"),
            h("input", {
              key: "input",
              type: "range",
              min: "1",
              max: "5",
              step: "1",
              value: bedrooms,
              onChange: function(event) {
                setBedrooms(Number(event.target.value));
              }
            })
          ]),
          h("div", { key: "mood", className: "mood-controls" }, moodOptions.map(function(option) {
            return h("button", {
              key: option,
              type: "button",
              className: option === mood ? "active" : "",
              onClick: function() {
                setMood(option);
              }
            }, option);
          }))
        ]),
        h("div", { key: "matches", className: "match-list" }, matches.slice(0, 4).map(function(property) {
          return h("button", {
            key: property.id,
            type: "button",
            className: property.id === selected.id ? "active" : "",
            onClick: function() {
              setSelectedId(property.id);
            }
          }, [
            h("span", { key: "score" }, property.matchScore + "%"),
            h("strong", { key: "title" }, property.title),
            h("small", { key: "price" }, api.formatPrice(property.price) + " / " + property.location)
          ]);
        }))
      ]),
      h("section", { key: "gallery", className: "gallery-stage" }, [
        h("div", { key: "image", className: "gallery-hero-frame" }, [
          h("img", {
            key: activeImage,
            src: activeImage || gallery[0],
            alt: selected.title,
            onError: function(event) {
              event.currentTarget.src = api.fallbackImage;
            }
          }),
          h("div", { key: "overlay", className: "gallery-overlay" }, [
            h("span", { key: "mode" }, selected.imageMode),
            h("h3", { key: "title" }, selected.title),
            h("p", { key: "price" }, api.formatPrice(selected.price) + " · " + selected.bedrooms + " bedrooms · " + selected.location)
          ])
        ]),
        h("div", { key: "thumbs", className: "gallery-thumbs" }, gallery.map(function(image, index) {
          return h("button", {
            key: image + index,
            type: "button",
            className: image === activeImage ? "active" : "",
            onClick: function() {
              setActiveImage(image);
            },
            "aria-label": "Show image " + (index + 1) + " for " + selected.title
          }, h("img", {
            src: image,
            alt: "",
            onError: function(event) {
              event.currentTarget.src = api.fallbackImage;
            }
          }));
        })),
        h("div", { key: "facts", className: "studio-facts" }, [
          h("span", { key: "payment" }, api.formatPrice(monthlyPayment) + " / month est."),
          h("span", { key: "walk" }, selected.walkScore + " walk score"),
          h("span", { key: "gallery" }, gallery.length + " images")
        ]),
        h("div", { key: "brief", className: "ai-brief-card" }, [
          h("p", { key: "eyebrow", className: "eyebrow" }, "Gallery direction"),
          h("p", { key: "copy" }, getGalleryNote(selected))
        ])
      ]),
      h("section", { key: "client", className: "cms-console client-console" }, [
        h("div", { key: "discover", className: "console-panel" }, [
          h("p", { key: "eyebrow", className: "eyebrow" }, selected.mood + " match"),
          h("h3", { key: "title" }, selected.title),
          h("p", { key: "description" }, selected.description),
          h("div", { key: "chips", className: "tag-row" }, (selected.tags || []).map(function(tag) {
            return h("span", { key: tag }, tag);
          })),
          h("div", { key: "actions", className: "console-actions" }, [
            h("button", {
              key: "snapshot",
              type: "button",
              onClick: function() {
                api.showPropertyById(selected.id);
              }
            }, "Open snapshot"),
            h("a", { key: "viewing", className: "button secondary-link", href: "#contact" }, "Book viewing")
          ]),
          h("div", { key: "activity", className: "activity-feed" }, [
            h("span", { key: "guide" }, "Viewing guidance available"),
            h("span", { key: "numbers" }, "Mortgage estimate included"),
            h("span", { key: "local" }, "Local area notes ready")
          ])
        ])
      ])
    ]);
  }

  if (window.ReactDOM.createRoot) {
    window.ReactDOM.createRoot(root).render(h(KeylineExperience));
  } else {
    window.ReactDOM.render(h(KeylineExperience), root);
  }
})();
