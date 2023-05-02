import React, {useCallback, useEffect, useMemo} from "react";
import {Box, Button, styled, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import {CepMaskInput} from "../../components/CepMaskIput/CepMaskInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const BoxForm = styled(Box)({
    "& .MuiFormControl-root": {
        marginBottom: 20
    },
    "& .MuiButton-root": {
        margin: "auto"
    },
});

function ufToState(uf) {
    const state = {
        "AC": "Acre",
        "AL": "Alagoas",
        "AP": "Amapá",
        "AM": "Amazonas",
        "BA": "Bahia",
        "CE": "Ceará",
        "DF": "Distrito Federal",
        "ES": "Espírito Santo",
        "GO": "Goiás",
        "MA": "Maranhão",
        "MT": "Mato Grosso",
        "MS": "Mato Grosso do Sul",
        "MG": "Minas Gerais",
        "PA": "Pará",
        "PB": "Paraíba",
        "PR": "Paraná",
        "PE": "Pernambuco",
        "PI": "Piauí",
        "RJ": "Rio de Janeiro",
        "RN": "Rio Grande do Norte",
        "RS": "Rio Grande do Sul",
        "RO": "Rondônia",
        "RR": "Roraima",
        "SC": "Santa Catarina",
        "SP": "São Paulo",
        "SE": "Sergipe",
        "TO": "Tocantins"
    };

    return state[uf.toUpperCase()] || "";
}

function PageContent(props) {
    const cepRegex = useMemo(() => /^\d{5}-\d{3}$/i, []);
    const {handleSubmit, control, setValue, resetField, watch} = useForm(
        {
            defaultValues: {
                firstName: "",
                lastName: "",
                postalCode: "",
                address: "",
                addressNumber: "",
                address2: "",
                neighborhood: "",
                city: "",
                state: "",
                mail: "",
                password: ""
            }
        }
    );
    const watchPostalCode = watch("postalCode");
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("/webapi/users", data).then((response) => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        }).catch((error) => {
            console.log(error);
            alert("Um erro ocorreu ao cadastrar o usuário, por for tente novamente.");
        });
    };

    const fillCepData = useCallback((data) => {
        if (data) {
            setValue("address", data.logradouro);
            setValue("neighborhood", data.bairro);
            setValue("city", data.localidade);
            setValue("state", ufToState(data.uf));
        } else {
            resetField("address");
            resetField("neighborhood");
            resetField("city");
            resetField("state");
        }
    }, [resetField, setValue]);

    useEffect(() => {
        if (cepRegex.test(watchPostalCode)) {
            const cepValue = watchPostalCode.replace(/\D/g, "");
            axios.get("https://viacep.com.br/ws/" + cepValue + "/json").then((response) => {
                const data = response.data;

                if (data?.erro) {
                    fillCepData(null);
                    alert("CEP informado é inválido, por favor verifique ao CEP informado");
                } else {
                    fillCepData(data);
                }
            }).catch((error) => {
                alert("Não foi possível buscar o CEP informado, por favor tente novamente.");
            });
        } else {
            fillCepData(null);
        }
    }, [cepRegex, fillCepData, watchPostalCode]);

    return (
        <BoxForm component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Nome" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth/>
                }}
                rules={{
                    required: {value: true, message: "O nome é obrigatório"}
                }}
            />

            <Controller
                name="lastName"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Sobrenome" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth/>
                }}
                rules={{
                    required: {value: true, message: "O sobrenome é obrigatório"}
                }}
            />

            <Controller
                name="postalCode"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="CEP" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth
                                      InputProps={{inputComponent: CepMaskInput}}/>
                }}
                rules={{
                    required: {value: true, message: "O CEP é obrigatório"},
                    pattern: {value: cepRegex, message: "CEP inválido"}
                }}
            />

            <Controller
                name="address"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Logradouro" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth disabled/>
                }}
            />

            <Controller
                name="addressNumber"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Número" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth/>
                }}
                rules={{
                    required: {value: true, message: "O número é obrigatório"}
                }}
            />

            <Controller
                name="address2"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Complemento" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth/>
                }}
            />

            <Controller
                name="neighborhood"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Bairro" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth disabled/>
                }}
            />

            <Controller
                name="city"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Cidade" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth disabled/>
                }}
            />

            <Controller
                name="state"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Estado" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth disabled/>
                }}
            />

            <Controller
                name="mail"
                control={control}
                render={({field, fieldState, formState}) => {
                    return <TextField label="Email" {...field} helperText={fieldState.error?.message}
                                      error={fieldState.error != null} fullWidth/>
                }}
                rules={{
                    required: {value: true, message: "O email é obrigatório"},
                    pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, message: "Email inválido"}
                }}
            />

            <PasswordInput name="password" label="Senha" control={control} minLen={8} maxLen={16}/>

            <Box display="inline-flex" justifyContent="center" width="100%">
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </BoxForm>
    );
}

export default function Signup(props) {
    return (
        <ContentContainer title="Cadastrar" bodyContent={<PageContent/>}/>
    );
}
