// Licensed under the MIT License.

import { expect } from 'chai';
import { encode, encodingExists } from 'iconv-lite';
import { BufferEncoder } from '../../../client/common/process/encoder';
import { initialize } from '../../initialize';

suite('Encoder', () => {
    setup(initialize);
    teardown(initialize);

    test('Test encoding utf8 strings', () => {
        const value = 'Sample input string Сделать это';
        const encoder = new BufferEncoder();
        const encodedBuffer = encoder.encode(value);
        const expectedBuffer = encode(value, 'utf8');
        expect(encodedBuffer).equal(expectedBuffer, 'Encoded buffer is incorrect');
    });

    test('Test encoding cp866 strings', function () {
        if (!encodingExists('cp866')) {
            // tslint:disable-next-line:no-invalid-this
            this.skip();
        }
        const value = 'Sample input string Сделать это';
        const encoder = new BufferEncoder();
        let encodedBuffer = encoder.encode(value);
        const unexpectedBuffer = encode(value, 'utf-8');
        expect(encodedBuffer).not.equal(unexpectedBuffer, 'Encoded buffer is the same as utf-8');

        const expectedBuffer = encode(value, 'cp866');
        encodedBuffer = encoder.encode(value, 'cp866');
        expect(encodedBuffer).equal(expectedBuffer, 'Encoded buffer is incorrect');
    });

});
