import { LfoTriggerMode, PwmType, VcfPolarity, VcaRoute, ChorusType } from '../enums/Enums';

export class Patch {
    constructor(lfoRate: number, lfoDelay: number, lfoTrigMode: LfoTriggerMode, 
        dcoLfoMod: number, dcoPwm: number, dcoPwmType: PwmType, dcoSquare: boolean, dcoSaw: boolean, dcoSubOsc: boolean, dcoSubOscAmount: number, dcoNoise: number,
        hpfCutoff: number, vcfCutoff: number, vcfRes: number, vcfPolarity: VcfPolarity, vcfEnvMod: number, vcfLfoMod: number, vcfKybdMod: number, 
        vcaRoute: VcaRoute, vcaLevel: VcfPolarity, envAttack: number, envDecay: number, envSustain: number, envRelease: number, chorus: ChorusType
    ) {
        this.lfoRate = lfoRate;
        this.lfoDelay = lfoDelay;
        this.lfoTrigMode = lfoTrigMode;
        this.dcoLfoMod = dcoLfoMod;
        this.dcoPwm = dcoPwm;
        this.dcoPwmType = dcoPwmType;
        this.dcoSquare = dcoSquare;
        this.dcoSaw = dcoSaw;
        this.dcoSubOsc = dcoSubOsc;
        this.dcoSubOscAmount = dcoSubOscAmount;
        this.dcoNoise = dcoNoise;
        this.hpfCutoff = hpfCutoff;
        this.vcfCutoff = vcfCutoff;
        this.vcfRes = vcfRes;
        this.vcfPolarity = vcfPolarity;
        this.vcfEnvMod = vcfEnvMod;
        this.vcfLfoMod = vcfLfoMod;
        this.vcfKybdMod = vcfKybdMod;
        this.vcaRoute = vcaRoute;
        this.vcaLevel = vcaLevel;
        this.envAttack = envAttack;
        this.envDecay = envDecay;
        this.envSustain = envSustain;
        this.envRelease = envRelease;
        this.chorus = chorus;
    }
    
    lfoRate: number;
    lfoDelay: number;
    lfoTrigMode: LfoTriggerMode;
    
    dcoLfoMod: number;
    dcoPwm: number;
    dcoPwmType: PwmType;
    dcoSquare: boolean;
    dcoSaw: boolean;
    dcoSubOsc: boolean;
    dcoSubOscAmount: number;
    dcoNoise: number;

    hpfCutoff: number;

    vcfCutoff: number;
    vcfRes: number;
    vcfPolarity: VcfPolarity;
    vcfEnvMod: number;
    vcfLfoMod: number;
    vcfKybdMod: number;

    vcaRoute: VcaRoute;
    vcaLevel: number;

    envAttack: number;
    envDecay: number;
    envSustain: number;
    envRelease: number;

    chorus: ChorusType;
}
