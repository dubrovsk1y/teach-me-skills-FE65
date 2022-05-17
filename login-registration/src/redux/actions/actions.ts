import { LOGIN, REGISTRATION } from "../types";

export function login () {
    return {
        type: LOGIN
    }
}

export function registartion () {
    return {
        type: REGISTRATION
    }
}