import './Techs.svelte.css.proxy.js';
/* src/components/Techs.svelte generated by Svelte v3.46.4 */
import {
	SvelteComponent,
	append,
	attr,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import { db } from '../db.svelte.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (7:0) {#if techs}
function create_if_block(ctx) {
	let section;
	let h3;
	let t1;
	let div;
	let each_value = /*techs*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			section = element("section");
			h3 = element("h3");
			h3.textContent = "Technologies I've used";
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div, "class", "techs__table svelte-7cp0wl");
			attr(section, "class", "techs svelte-7cp0wl");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, h3);
			append(section, t1);
			append(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*techs*/ 1) {
				each_value = /*techs*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (11:6) {#each techs as tech}
function create_each_block(ctx) {
	let div;
	let t0_value = /*tech*/ ctx[1] + "";
	let t0;
	let t1;

	return {
		c() {
			div = element("div");
			t0 = text(t0_value);
			t1 = space();
			attr(div, "class", "tech");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*techs*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*techs*/ ctx[0]) if_block.p(ctx, dirty);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self) {
	const { techs } = db;
	return [techs];
}

class Techs extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Techs;