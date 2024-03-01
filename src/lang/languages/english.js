/*  Check out https://vue-i18n.intlify.dev/guide/essentials/syntax for a syntax guide.

    This export will be directly included in the main structure, with the relevant language flag, all
    that needs to be worried about here are the messages, and any applicable language modifiers.

    Note, this file is for English (British)

    I'm being as verbose as possible with the strings, while there are a lot of common answers for things
    like buttons (Yes, No, Ok, Cancel, etc), I'm a little paranoid some languages may need more contextual
    answers, so they're all individually labelled here.
 */


export default {
    message: {
        // For these, the keys map directly to their GoXLR Channel Names
        channels: {
            Mic: "Mic",
            Chat: "Voice Chat",
            Music: "Music",
            Game: "Game",
            Console: "Console",
            LineIn: "Line In",
            System: "System",
            Sample: "Sample",
            LineOut: "Line Out",
            Headphones: "Headphones",
            MicMonitor: "Mic Monitor",
            StreamMix: "Stream Mix",
            ChatMic: "Chat Mic",
            Sampler: "Sampler",
        },

        suffixes: {
            decibels: "dB",
            percentage: "%",
            milliseconds: "ms",
            hertz: "Hz",
            kilohertz: "KHz",
            ratio: ":{value}",
        },

        modalButtons: {
            ok: "Ok",
            yes: "Yes",
            no: "No",
            cancel: "Cancel"
        },

        // These Strings appear in the tabs throughout the pages
        navigation: {
            // Tabs at the top of the Page
            profiles: "Profiles",
            presets: "Presets",
            samples: "Samples",

            // Main Navigation Tabs
            microphone: "Mic",
            mixer: "Mixer",
            configuration: "Configuration",
            effects: "Effects",
            sampler: "Sampler",
            lighting: "Lighting",
            routing: "Routing",
            system: "System",

            // Navigation Sections on the Lighting Page
            lightingGlobal: "Global",
            lightingMixer: "Mixer",
            lightingEffects: "Effects",
            lightingSampler: "Sampler",
            lightingCough: "Cough",

            // Accessibility Messages (these are announced to screen readers)
            accessibilityProfileSection: "Profiles and Files",
            accessibilityDeviceSection: "Device Settings",
            accessibilityLightingSection: "Lighting Settings",
        },

        // Strings that appear in the Mic tab, note that the Profile Strings are handled in 'profileManager'
        microphone: {
            profiles: {
                title: "Mic Profiles"
            },

            setup: {
                button: "Mic Setup",
                title: "Mic Setup",
                type: "Mic Type",
                gain: "Gain",

                // Microphone Types
                xlr: "XLR Microphone",
                phantom: "XLR + Phantom (+{voltage}V)",
                jack: "3.5mm",
            },
            waveform: {
                peaking: "Peaking",
                speaking: "Speaking Area",
                gate_estimated: "Gate is Estimated"
            },

            gate: {
                title: "Gate",
                threshold: "Threshold",
                attenuation: "Attenuation",
                attack: "Attack",
                release: "Release",
            },

            equaliser: {
                title: "Equaliser",
                reset: "Reset",
                enableFineTune: "Enable Fine Tune",
                bass: "Bass",
                mid: "Mid",
                treble: "Treble",
            },

            compressor: {
                title: "Compressor",
                amount: "Amount",
                threshold: "Threshold",
                ratio: "Ratio",
                attack: "Attack",
                release: "Release",
                makeUpGain: "Make-Up Gain",
            },

            extras: {
                deEsser: "De-Esser",
                bleep: "Bleep",
            }
        },

        mixer: {
            // Box Headers
            inputs: "Inputs",
            outputs: "Outputs",
            mixAssignment: "Mix Assignment",

            // Submix Checkbox
            submix: "Submixes",

            // Mix Assignment
            channelA: "A",
            channelB: "B"
        },

        // Strings in the Configuration Tab
        configuration: {
            // This is common between Faders and Cough Buttons
            mute_behaviour: {
                all: "Mute to All",
                stream: "Mute to @:message.channel.streamMix",
                chatMic: "Mute to @:message.channel.chatMic",
                headphones: "Mute to @:message.channel.headphones",
                lineOut: "Mute to @:message.channel.lineOut",
            },
            muteBehaviourTitle: "Mute Behaviour",

            // Config for the Faders
            faders: {
                channel: {
                    title: "Channel",
                    channelOne: "Channel 1",
                    channelTwo: "Channel 2",
                    channelThree: "Channel 3",
                    channelFour: "Channel 4",
                },

                // The channel list for this section will come from 'channels' above.
                sourceTitle: "Source",
            },

            // Configuration for the Cough Button
            cough: {
                behaviour: {
                    hold: "Hold",
                    toggle: "Toggle",
                },

                title: "Cough Button Settings",
            }
        },

        // Strings used in Profile and Microphone Profile Management.
        profileManager: {
            // Accessibility Titles for the buttons at the bottom of the Profile List
            saveProfileName: "Save Profile {profileName}",
            createProfile: "Create Profile",

            // Dialog Popup when clicking 'Create Profile' Button
            newTitle: "New Profile Source",
            newQuestion: "Would you like to create a new profile from the default, or current configuration?",
            newDefaultButton: "Default",
            newCurrentButton: "Current",
            newCancelButton: "@:message.modalButtons.cancel",

            // Dialog Popup when hitting the 'Save Profile' button
            overwriteTitle: "Overwrite Confirmation",
            overwriteQuestion: "Are you sure you want to overwrite the profile {activeProfile}?",
            overwriteYes: "@:message.modalButtons.yes",
            overwriteNo: "@:message.modalButtons.no",

            // Dialog Popup when clicking the 'Delete' Menu Item
            deleteTitle: "Delete Confirmation",
            deleteQuestion: "Are you sure you want to delete the profile {profileName}?",
            deleteYes: "@:message.modalButtons.yes",
            deleteNo: "@:message.modalButtons.no",

            // Dialog prompting for a new Profile Name
            newNameTitle: "Enter New Profile Name",
            newNamePlaceHolder: "New Name",
            newNameOk: "@:message.modalButtons.ok",
            newNameCancel: "@:message.modalButtons.cancel",

            // Dialog Popup when attempting to delete the active profile
            deleteCurrentErrorTitle: "Unable to Delete",
            deleteCurrentErrorMessage: "It is not possible to delete the active profile.",

            // Items in the Popup Menu on Profiles
            menuLoadProfile: "Load Profile",
            menuLoadProfileColours: "Load Colours Only",
            menuDeleteProfile: "Delete Profile",


            // Accessibility Messages (these are announced to screen readers)
            accessibilityLoadedProfile: "Profile {profileName} loaded",
            accessibilityLoadedColours: "Profile {profileName} colours loaded",
            accessibilityCreatedProfile: "Created profile {profileName}",
            accessibilitySavedProfile: "Profile {profileName} Saved",
            accessibilitySavedProfileAs: "Profile {profileName} Saved as {newProfileName}",
            accessibilityProfileDeleted: "Profile {profileName} deleted",
            accessibilityActiveProfile: "Active Profile",
            accessibilityDropMenuTitle: "{profileName} options",
            accessibilityOpenProfileDirectory: "Open Profile Directory",
            accessibilityOpenMicProfileDirectory: "Open Mic Profile Directory",
        },
    }
}