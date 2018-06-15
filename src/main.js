import vue from 'vue';

import navigation from 'components/navigation/navigation';
import home from 'components/home/home';
import divider from 'components/divider/divider';
import feature from 'components/feature/feature';
import pricing from 'components/pricing/pricing';
import privacy from 'components/privacy/privacy';
import contact from 'components/contact/contact';
import pageFooter from 'components/pageFooter/page-footer';

import 'src/style.scss';

new vue({
  components: {
    navigation,
    home,
    divider,
    feature,
    pricing,
    privacy,
    contact,
    pageFooter,
  },
}).$mount('#app');
