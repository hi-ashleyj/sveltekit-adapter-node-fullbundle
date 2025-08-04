import { Adapter } from '@sveltejs/kit';
import './ambient.js';

declare global {
	const ENV_PREFIX: string;
}

interface AdapterOptions {
	out?: string;
	precompress?: boolean;
	envPrefix?: string;
	envs?: Partial<{ [x in typeof import("./src/env.js").envs[number] ]: string }>
}

export default function plugin(options?: AdapterOptions): Adapter;