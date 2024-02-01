document.getElementById('kindnessButton').addEventListener('click', function() {
    const actsOfKindness = [
        "Compliment someone.",
        "Write a thank-you note.",
        "Donate to a charity.",
        "Volunteer your time for a social cause.",
        "Share inspirational stories on social media.",
        "Educate yourself on a social justice issue.",
        "Support a local business.",
        "Offer to help someone with their work.",
        "Recycle and encourage others to do so.",
        "Smile at strangers."
    ];

    const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
    document.getElementById('kindnessText').innerText = actsOfKindness[randomIndex];
});
