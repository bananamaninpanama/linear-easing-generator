import { signal } from '@preact/signals';
const twoColMedia = matchMedia('(min-width: 1160px)');
const threeColMedia = matchMedia('(min-width: 1160px)');
function getCols() {
    if (threeColMedia.matches)
        return 3;
    if (twoColMedia.matches)
        return 2;
    return 1;
}
const cols = signal(getCols());
function onMediaChange() {
    cols.value = getCols();
}
twoColMedia.addEventListener('change', onMediaChange);
threeColMedia.addEventListener('change', onMediaChange);
export { cols as default };
