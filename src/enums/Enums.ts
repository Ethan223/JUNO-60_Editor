export enum LfoTriggerMode {
    AUTO = 0,
    MAN,
}

export enum PwmType {
    LFO = 0,
    MAN,
    ENV,
}

export enum VcaRoute {
    ENV = 0,
    GATE,
}

export enum VcfPolarity {
    NORMAL = 0,
    INVERTED,
}

export enum ChorusType {
    OFF = 0,
    I,
    II,
    BOTH,
}

export enum StatePart {
    LFO = 'LFO', DCO = 'DCO', HPF = 'HPF', VCF = 'VCF', VCA = 'VCA', ENV = 'ENV', CHORUS = 'CHORUS',
}