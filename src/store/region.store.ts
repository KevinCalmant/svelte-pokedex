import {writable} from "svelte/store";
import type {Region} from "../types/region";

export const selectedRegion = writable<Region>('kanto');