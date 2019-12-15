// Licensed under the MIT License.

import * as iconv from 'iconv-lite';
import { injectable } from 'inversify';
import { DEFAULT_ENCODING } from './constants';
import { IBufferEncoder } from './types';

@injectable()
export class BufferEncoder implements IBufferEncoder {
    public encode(text: string, encoding: string = DEFAULT_ENCODING): Buffer {
        encoding = iconv.encodingExists(encoding) ? encoding : DEFAULT_ENCODING;
        return iconv.encode(text, encoding);
    }
}
