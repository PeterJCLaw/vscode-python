// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { inject, injectable } from 'inversify';
import { ProcessService } from '../../../common/process/proc';
import { IBufferDecoder, IBufferEncoder, IProcessService, IProcessServiceFactory } from '../../../common/process/types';
import { IDisposableRegistry } from '../../../common/types';

@injectable()
export class DebuggerProcessServiceFactory implements IProcessServiceFactory {
    constructor(
        @inject(IBufferDecoder) private readonly decoder: IBufferDecoder,
        @inject(IBufferEncoder) private readonly encoder: IBufferEncoder,
        @inject(IDisposableRegistry) private readonly disposableRegistry: IDisposableRegistry
    ) { }
    public create(): Promise<IProcessService> {
        const processService = new ProcessService(this.decoder, this.encoder, process.env);
        this.disposableRegistry.push(processService);
        return Promise.resolve(processService);
    }
}
