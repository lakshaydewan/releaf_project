import { atom } from "recoil";


export const semesteratom = atom({
    key : 'semesteratom',
    default : "",
})

export const branchatom = atom({
    key : 'branchatom',
    default : "",
})

export const WidthAtom = atom({
    key: "WidthAtom",
    default: "w-0"
})

export const SideBarAtom = atom({
    key: "SideBarAtom",
    default: false
})