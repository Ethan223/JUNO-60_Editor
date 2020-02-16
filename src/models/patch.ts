export class Patch {
    constructor(lfoRate: number, lfoDelay: number, lfoTrigMode: number, 
        dcoLfoMod: number, dcoPwm: number, dcoPwmType: number, dcoSquare: boolean, dcoSaw: boolean, dcoSubOsc: boolean, dcoSubOscAmount: number, dcoNoise: number,
        hpfCutoff: number, vcfCutoff: number, vcfRes: number, vcfPolarity: number, vcfEnvMod: number, vcfLfoMod: number, vcfKybdMod: number, 
        vcaRoute: number, vcaLevel: number, envAttack: number, envDecay: number, envSustain: number, envRelease: number, chorusType: number
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
        this.chorusType = chorusType;
    }
    
    lfoRate: number;
    lfoDelay: number;
    lfoTrigMode: number; // Possible enum
    
    dcoLfoMod: number;
    dcoPwm: number;
    dcoPwmType: number; // Possible enum
    dcoSquare: boolean;
    dcoSaw: boolean;
    dcoSubOsc: boolean;
    dcoSubOscAmount: number;
    dcoNoise: number;

    hpfCutoff: number;

    vcfCutoff: number;
    vcfRes: number;
    vcfPolarity: number; // Possible enum
    vcfEnvMod: number;
    vcfLfoMod: number;
    vcfKybdMod: number;

    vcaRoute: number; // Possible enum
    vcaLevel: number;

    envAttack: number;
    envDecay: number;
    envSustain: number;
    envRelease: number;

    chorusType: number; // Possible enum
}
