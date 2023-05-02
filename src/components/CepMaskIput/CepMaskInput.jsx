import React from "react";
import {IMaskInput} from "react-imask";

export const CepMaskInput = React.forwardRef((props, ref) => {
    return (
        <IMaskInput
            {...props}
            mask="00000-000"
            inputRef={ref}
        />
    );
});
