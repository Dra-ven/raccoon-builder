// script.js

const traits = {
    background: ["default.png", "white.png", "blue.png", "brown.png", "green.png", "night-sky.png", "orange.png", "pink.png", "purple.png", "red.png", "yellow.png"],
    body: ["brown.png"],
    eyes: ["default.png", "black.png", "blue.png", "purple.png", "red.png"],
    hair: ["default.png", "braids-gold.png", "braids-pink.png", "braids-white.png", "curls-black.png", "curls-red.png", "mohawk-pink.png", "mohawk-yellow.png", "mop-head-blonde.png", "mop-head-brown.png", "mop-head-pink.png", "undercut-black.png", "undercut-blonde.png", "undercut-green.png", "wig-blonde.png", "wig-brown.png"],
    clothing: [
        // T-Shirts
        "blue-t-shirt.png", "macdonald-t-shirt-black.png", "macdonald-t-shirt-yellow.png", "pink-t-shirt.png", "shredded-tee.png", "striped-t-shirt 1.png", "striped-t-shirt 2.png", "yellow-t-shirt.png",
        // Suits
        "black-suit.png", "blue-suit.png", "brown-suit.png", "grey-suit.png", "grey-suit-x-brown-shirt.png", "red-suit.png",
        // Jackets
        "beige-rock-jacket.png", "blue-rock-jacket.png", "mage-jacket-black.png", "mage-jacket-purple.png", "orange-jacket-1.png", "orange-jacket-2.png", "padded-jacket-white.png", "padded-jacket-yellow.png", "purple-jacket.png",
        // Hoodies
        "black-hoodie.png", "brown-hoodie.png", "grey-hoodie.png",
        // Coats
        "brown-coat.png", "judge-coat.png", "trench-coat.png", "white-coat.png",
        // Capes
        "traveler-cape-brown.png", "traveler-cape-purple.png", "traveler-cape-red.png",
        // Tank Tops
        "tank-top-blue.png", "tank-top-red.png", "tank-top-yellow.png",
        // Traditional Attires
        "traditional-attire-blue.png", "traditional-attire-pink.png",
        // Overalls
        "blue-overall.png", "pink-overall.png", "purple-overall.png",
        // Shirts
        "beige-shirt.png", "blue-shirt.png", "green-shirt.png", "green-shirt-2.png", "vintage-shirt-blue.png", "vintage-shirt-orange.png", "white-shirt.png", "yellow-shirt.png",
        // Wrappers
        "wrapper.png", "wrapper-cave-man.png",
        // Kimonos
        "orange-kimono.png", "purple-kimono.png",
        // Special Items
        "scallop-top-pink.png", "scallop-top-purple.png", "scallop-top-red.png", "scallop-top-yellow.png", "shadowed-veil-brown.png", "shadowed-veil-white.png"
    ],
    accessories: [
        // Hats
        "default.png", "baseball-cap-black.png", "baseball-cap-blue.png", "baseball-cap-pink.png", "beret-brown.png", "brown-hat.png", "emperor-hat.png", "flat-cap-black.png", "flat-cap-brown.png", "sun-hat-brown.png", "sun-hat-green.png", "striped-cap.png",
        // Headbands
        "bandana.png", "caveman-headband.png", "headband-blue.png", "headband-pink.png", "headband-white.png", "mage-head-band.png",
        // Scarves
        "scarf-black.png", "scarf-green.png", "scarf-red.png",
        // Glasses
        "glasses-black.png", "glasses-white.png", "sun-glasses.png",
        // Masks
        "mask.png"
    ]
};

// Update trait layer
function updateTrait(traitType, newTrait) {
    document.getElementById(`${traitType}-layer`).src = `images/${traitType}/${newTrait}`;
}

// Initialize dropdowns to default values
function initializeControls() {
    for (const traitType in traits) {
        const select = document.getElementById(`${traitType}-select`);
        select.addEventListener("change", (e) => {
            updateTrait(traitType, e.target.value);
        });
    }
}

// Randomize traits and update layers
function randomizeTraits() {
    for (const traitType in traits) {
        // Skip the "body" trait
        if (traitType === "body") continue;

        // Get the options for the current trait
        const options = traits[traitType];

        // Select a random option
        const randomOption = options[Math.floor(Math.random() * options.length)];

        // Ensure the random option exists in the dropdown
        const dropdown = document.getElementById(`${traitType}-select`);
        const validOption = Array.from(dropdown.options).some(option => option.value === randomOption);

        if (validOption) {
            // Update the image and dropdown value
            updateTrait(traitType, randomOption);
            dropdown.value = randomOption;
        } else {
            console.error(`Invalid option "${randomOption}" for ${traitType}`);
        }
    }
}

function saveImage() {
    const previewElement = document.getElementById("raccoon-preview");
    html2canvas(previewElement).then((canvas) => {
        const link = document.createElement("a");
        link.download = "raccoon-design.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

document.getElementById("save-image-btn").addEventListener("click", saveImage);
document.getElementById("randomize-btn").addEventListener("click", randomizeTraits);

// Initialize everything on load
initializeControls();
