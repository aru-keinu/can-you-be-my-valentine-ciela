// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Ciela",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Ciela...",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💟'],  // Heart emojis
        bears: ['💞', '💕']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Gusto mo ba ako?",                                    // First interaction
            yesBtn: "Oo",                                             // Text for "Yes" button
            noBtn: "Hindi",                                               // Text for "No" button
            secretAnswer: "GUSTONG GUSTO !!! ❤️"           // Secret hover message
        },
        second: {
            text: "Eh paano kapag mahal? Mahal mo ba ako?",                          // For the love meter
            startText: "Gaano mo ako kamahal?",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Pwede bang magtanong sayo? 💌", // The big question!
            yesBtn: "Oo!",                                             // Text for "Yes" button
            noBtn: "Bawal."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "UWAAAHHH GRABE NA! ANG OA!!! 😍🤧",  // Shows when they go past 5000%
        high: "AWWWW, YAYYYY !! 🥰",              // Shows when they go past 1000%
        normal: "Oh? Mahal mo ako? 😳"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#0f0f0f",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#1a1919",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#7f1d1d",     // Button color (should stand out against the background)
        buttonHover: "#992e2e",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#7f1d1d"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dlg3tc2le/video/upload/v1770373143/Come_Inside_Of_My_Heart_spotdown.org_gki6wo.mp3", // Music streaming URL
        startText: "🎵",        // Button text to start music
        stopText: "🔇",         // Button text to stop music
        volume: 0.4                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
