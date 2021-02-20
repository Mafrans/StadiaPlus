import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import { Config } from '../../../shared/Config';
import { PageQueryType } from '../../../shared/models/PageQueryType';

export default class CodecSelectComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({ name: "Codec Select Component" });
    }

    async onStart() {

    }

    async onUpdate() {

    }
}


