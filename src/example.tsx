import React, { type FunctionComponent } from 'react';
import { DevTool } from '@hookform/devtools';

type NewCompoProps = {
    plop: string;
};

const NewCompo: FunctionComponent<NewCompoProps> = function ({ plop }: NewCompoProps) {
    const plip = 'plop';

    return (
        <p>
            <DevTool />
            {plop}
            {plip}
        </p>
    );
};

export default NewCompo;
