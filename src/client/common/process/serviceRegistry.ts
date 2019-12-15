// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IServiceManager } from '../../ioc/types';
import { BufferDecoder } from './decoder';
import { BufferEncoder } from './encoder';
import { ProcessServiceFactory } from './processFactory';
import { PythonExecutionFactory } from './pythonExecutionFactory';
import { PythonToolExecutionService } from './pythonToolService';
import { IBufferDecoder, IBufferEncoder, IProcessServiceFactory, IPythonExecutionFactory, IPythonToolExecutionService } from './types';

export function registerTypes(serviceManager: IServiceManager) {
    serviceManager.addSingleton<IBufferDecoder>(IBufferDecoder, BufferDecoder);
    serviceManager.addSingleton<IBufferEncoder>(IBufferEncoder, BufferEncoder);
    serviceManager.addSingleton<IProcessServiceFactory>(IProcessServiceFactory, ProcessServiceFactory);
    serviceManager.addSingleton<IPythonExecutionFactory>(IPythonExecutionFactory, PythonExecutionFactory);
    serviceManager.addSingleton<IPythonToolExecutionService>(IPythonToolExecutionService, PythonToolExecutionService);
}
