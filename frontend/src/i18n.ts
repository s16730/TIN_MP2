import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";
import pl from '@/locales/pl.json'

const DEFAULT_LOCALE = 'pl';

Vue.use(VueI18n)


export default new VueI18n({
  locale: DEFAULT_LOCALE, // set locale either from localStorage or config
  fallbackLocale: undefined,
  messages: {
    pl: pl
  },
  silentFallbackWarn: true,
});
