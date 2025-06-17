export * from './lib/shared-types';

type Name = {
	english: string;
	japanese: string;
	chinese: string;
	french: string;
}

type Base = {
	hp: number;
	attack: number;
	defense: number;
	special_attack: number;
	special_defense: number;
	speed: number;
}

export interface Pokemon {
	id: number;
	name: Name;
	type: string[];
	base: Base;
}
