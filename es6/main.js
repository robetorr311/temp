const $ = require('jquery');

/*[1] detected device*/
import {default as is_touch_device} from './detectedDevice';

if (is_touch_device()) $('html').addClass('touch');
else $('html').addClass('no-touch');

/*[1] detected device*/


/*[2] safariDetected*/
import {default as getMobileOperatingSystem} from './getMobileOperatingSystem';

if (getMobileOperatingSystem() === "ios") $('body').attr('data-device', 'ios');

if (getMobileOperatingSystem() === "android") $('body').attr('data-device', 'android');


/*[2] safariDetected*/

/*[3] inputFocus*/
import {default as inputFocus} from './inputFocus';

inputFocus();
/*[3] inputFocus*/



/* [7] menuBtn*/
import {default as menuBtn} from './menuBtn';

menuBtn();
/* [7] menuBtn*/


/*[8] ie*/
import {default as ie} from './ie';

if(ie() == 11) $('body').addClass('ie');







