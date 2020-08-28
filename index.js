import Pretty from "./Pretty.svelte";
import ellxify from '~ellx-hub/lib/utils/svelte.js';

const jsonView = ellxify(Pretty);

export default value => jsonView({ value });