/* global ENV_PREFIX */
import process from 'node:process';
import { config } from "CONFIGURATION";

export const envs = /** @type {const} */ ([
	'SOCKET_PATH',
	'HOST',
	'PORT',
	'ORIGIN',
	'XFF_DEPTH',
	'ADDRESS_HEADER',
	'PROTOCOL_HEADER',
	'HOST_HEADER',
	'PORT_HEADER',
	'BODY_SIZE_LIMIT',
	'SHUTDOWN_TIMEOUT',
	'IDLE_TIMEOUT'
])

const expected = new Set(envs);

const expected_unprefixed = new Set(['LISTEN_PID', 'LISTEN_FDS']);

/**
 * @param {typeof envs[number]} name
 * @param {any} fallback
 */
export function env(name, fallback) {
	const prefix = expected_unprefixed.has(name) ? '' : ENV_PREFIX;
	const prefixed = prefix + name;
	if (prefixed in process.env) return process.env[prefixed];
	if (name in config) return config[name];
	return fallback;
}