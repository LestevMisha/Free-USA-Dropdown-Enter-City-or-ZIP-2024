document.addEventListener("DOMContentLoaded", function () {
    console.log("main-script");

    // +++++ MARK ++++++: Autocomplete dropdown for addresses
    const inputs = document.querySelectorAll('.address_autocomplete');
    if (inputs.length > 0) {
        inputs.forEach((input) => {
            const zipCodesUl = input.nextElementSibling;
            // if clicked - insert
            zipCodesUl.addEventListener("click", (e) => {
                input.value = e.target.textContent;
                zipCodesUl.innerHTML = '';
            });

            // Check if the click target is not the input field or the autocomplete dropdown
            document.body.addEventListener('click', function (event) {
                const target = event.target;

                if (target !== input && !zipCodesUl.contains(target)) {
                    zipCodesUl.innerHTML = ''; // Close autocomplete dropdown
                }
            });

            input.addEventListener('input', function (e) {
                search(e.target.value.trim().toLowerCase(), zipCodesUl);
            });
        });
    }


    // List of script URLs to load
    const ZIPsInNumericOrderScriptURLs = {
        0: {
            path: "./ZIPs-in-numeric-order/us00_09.js",
            variable_name: "us00_09",
            is_loaded: 0,
        },
        1: {
            path: "./ZIPs-in-numeric-order/us10_19.js",
            variable_name: "us10_19",
            is_loaded: 0,
        },
        2: {
            path: "./ZIPs-in-numeric-order/us20_29.js",
            variable_name: "us20_29",
            is_loaded: 0,
        },
        3: {
            path: "./ZIPs-in-numeric-order/us30_39.js",
            variable_name: "us30_39",
            is_loaded: 0,
        },
        4: {
            path: "./ZIPs-in-numeric-order/us40_49.js",
            variable_name: "us40_49",
            is_loaded: 0,
        },
        5: {
            path: "./ZIPs-in-numeric-order/us50_59.js",
            variable_name: "us50_59",
            is_loaded: 0,
        },
        6: {
            path: "./ZIPs-in-numeric-order/us60_69.js",
            variable_name: "us60_69",
            is_loaded: 0,
        },
        7: {
            path: "./ZIPs-in-numeric-order/us70_79.js",
            variable_name: "us70_79",
            is_loaded: 0,
        },
        8: {
            path: "./ZIPs-in-numeric-order/us80_89.js",
            variable_name: "us80_89",
            is_loaded: 0,
        },
        9: {
            path: "./ZIPs-in-numeric-order/us90_99.js",
            variable_name: "us90_99",
            is_loaded: 0,
        }
    };
    // List of script URLs to load
    const citiesInAlphabeticalOrderScriptURLs = {
        "a": {
            path: "./cities-in-alphabetical-order/a.js",
            variable_name: "a",
            is_loaded: 0,
        },
        "b": {
            path: "./cities-in-alphabetical-order/b.js",
            variable_name: "b",
            is_loaded: 0,
        },
        "c": {
            path: "./cities-in-alphabetical-order/c.js",
            variable_name: "c",
            is_loaded: 0,
        },
        "d": {
            path: "./cities-in-alphabetical-order/d.js",
            variable_name: "d",
            is_loaded: 0,
        },
        "e": {
            path: "./cities-in-alphabetical-order/e.js",
            variable_name: "e",
            is_loaded: 0,
        },
        "f": {
            path: "./cities-in-alphabetical-order/f.js",
            variable_name: "f",
            is_loaded: 0,
        },
        "g": {
            path: "./cities-in-alphabetical-order/g.js",
            variable_name: "g",
            is_loaded: 0,
        },
        "h": {
            path: "./cities-in-alphabetical-order/h.js",
            variable_name: "h",
            is_loaded: 0,
        },
        "i": {
            path: "./cities-in-alphabetical-order/i.js",
            variable_name: "i",
            is_loaded: 0,
        },
        "j": {
            path: "./cities-in-alphabetical-order/j.js",
            variable_name: "j",
            is_loaded: 0,
        },
        "k": {
            path: "./cities-in-alphabetical-order/k.js",
            variable_name: "k",
            is_loaded: 0,
        },
        "l": {
            path: "./cities-in-alphabetical-order/l.js",
            variable_name: "l",
            is_loaded: 0,
        },
        "m": {
            path: "./cities-in-alphabetical-order/m.js",
            variable_name: "m",
            is_loaded: 0,
        },
        "n": {
            path: "./cities-in-alphabetical-order/n.js",
            variable_name: "n",
            is_loaded: 0,
        },
        "o": {
            path: "./cities-in-alphabetical-order/o.js",
            variable_name: "o",
            is_loaded: 0,
        },
        "p": {
            path: "./cities-in-alphabetical-order/p.js",
            variable_name: "p",
            is_loaded: 0,
        },
        "q": {
            path: "./cities-in-alphabetical-order/q.js",
            variable_name: "q",
            is_loaded: 0,
        },
        "r": {
            path: "./cities-in-alphabetical-order/r.js",
            variable_name: "r",
            is_loaded: 0,
        },
        "s": {
            path: "./cities-in-alphabetical-order/s.js",
            variable_name: "s",
            is_loaded: 0,
        },
        "t": {
            path: "./cities-in-alphabetical-order/t.js",
            variable_name: "t",
            is_loaded: 0,
        },
        "u": {
            path: "./cities-in-alphabetical-order/u.js",
            variable_name: "u",
            is_loaded: 0,
        },
        "v": {
            path: "./cities-in-alphabetical-order/v.js",
            variable_name: "v",
            is_loaded: 0,
        },
        "w": {
            path: "./cities-in-alphabetical-order/w.js",
            variable_name: "w",
            is_loaded: 0,
        },
        "x": {
            path: "./cities-in-alphabetical-order/x.js",
            variable_name: "x",
            is_loaded: 0,
        },
        "y": {
            path: "./cities-in-alphabetical-order/y.js",
            variable_name: "y",
            is_loaded: 0,
        },
        "z": {
            path: "./cities-in-alphabetical-order/z.js",
            variable_name: "z",
            is_loaded: 0,
        },
    };

    const usaAddressesInput = document.getElementById("usa_addresses_input");
    const usaAddressesList = document.getElementById("usa_addresses_list");

    // Add Listener
    usaAddressesInput.addEventListener("input", function (e) {
        search(e.target.value.trim().toLowerCase());
    });


    // load scripts asynchronously / load-as-user-goes
    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // append new localities
    function addLiFiltering(list, parent, value) {

        list.forEach(geo => {
            const localities = geo["localities"];
            const postalCode = geo["postal_code"];
            var debug = 0;

            if (localities.length > 1) {
                localities.forEach(locality => {
                    if (`${locality}, ${postalCode}`.toLowerCase().startsWith(value) || postalCode.startsWith(value)) {
                        debug = 1
                        addLi(parent, `${locality}, ${postalCode}`);
                    };
                });
                // if none of localities matched the criteria
                if (debug === 1) {
                    return;
                }
            }

            addLi(parent, `${geo["locality"]}, ${postalCode}`);
        });
    }

    function addLi(parent, str) {
        const li = document.createElement('li');
        li.className = "b-text b-text__content-text b-text_color_7";
        li.textContent = str;
        parent.appendChild(li);
    }

    function search(value, listElement) {
        // clear dropdown
        listElement.innerHTML = "";

        if (value !== "") {

            var obj = ZIPsInNumericOrderScriptURLs[value.slice(0, 1)] ?? citiesInAlphabeticalOrderScriptURLs[value.slice(0, 1)];
            var limitedList, limitedList;

            if (!obj.is_loaded) {
                // load script
                loadScript(obj.path).then(function () {
                    filteredList = window[obj.variable_name].filter(geo =>
                        geo["localities"].some(locality => `${locality}, ${geo["postal_code"]}`.toLowerCase().startsWith(value)) ||
                        geo["postal_code"].startsWith(value) &&
                        geo["state"] !== null
                    );

                    // make a limit
                    limitedList = filteredList.slice(0, 50);
                    console.log(limitedList)
                    // add an element
                    addLiFiltering(limitedList, listElement, value);
                    // disable load
                    obj.is_loaded = 1;

                });
            } else {
                filteredList = window[obj.variable_name].filter(geo =>
                    geo["localities"].some(locality => `${locality}, ${geo["postal_code"]}`.toLowerCase().startsWith(value)) ||
                    geo["postal_code"].startsWith(value) &&
                    geo["state"] !== null
                );
                // make a limit
                limitedList = filteredList.slice(0, 50);
                console.log(limitedList)
                // add an element
                addLiFiltering(limitedList, listElement, value);

            }
        }
    }
});