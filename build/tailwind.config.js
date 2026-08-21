/** Build-Config für die statische Auslieferung — spiegelt die frühere Inline-Config (Play-CDN). */
module.exports = {
  content: ['../index.html', '../impressum.html', '../datenschutz.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans','ui-sans-serif','system-ui','sans-serif'],
        mono: ['IBM Plex Mono','ui-monospace','monospace'],
        display: ['Bricolage Grotesque','ui-sans-serif','system-ui','sans-serif'],
      },
      /* Dunkles Farbsystem (Schwarz-Violett). Die Rollen sind gleich geblieben,
         nur die Werte sind gedreht: ink = Text, paper = Grund, surface = Karte. */
      colors: {
        ink:'#F4F2FA', navy:'#1E1B4B',
        accent:'#8B5CF6', accent2:'#3B82F6', accentDeep:'#A78BFA',
        paper:'#0B0912', surface:'#141021', line:'#26203A', mute:'#A29CB8',
      },
    },
  },
}
