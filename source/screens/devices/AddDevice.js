import * as React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';

import { addDevice } from '../../actions/devices';



const AddDeviceModal = ({device , isAdd}) => {

const dispatch = useDispatch();

    const devices = useSelector(state => state.devices.devices);

    const INITIAL_DEVICE = {
        name: "",
        description: "",
        is_active: false,
    };

    const [newDevice, setNewDevice] = useState<any>(INITIAL_DEVICE);
    const [newDeviceErrors, setNewDeviceErrors] = useState<any>({});

    const validations = {
        name: {
            isRequired: true,
        },
        description: {
            isRequired: true,
        },
        is_active: {
            isRequired: true,
            isBoolean: true,
        },
    };

    const changeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const validator = validations[name];
        const errors = [];

        if (validator) {
            if (validator.isRequired) {
                if (validator.isBoolean) {
                    if (value !== true || value !== false) {
                        errors.push("REQUIRED_FIELD");
                    }
                } else {
                    if (value.length < 1) {
                        errors.push("REQUIRED_FIELD");
                    }
                }
            }
        }

        setNewDevice({
            ...newDevice,
            [name]: value,
        });
        if (errors.length > 0)
            setNewDeviceErrors({
                ...newDeviceErrors,
                [name]: errors,
            });
        else
            setNewDeviceErrors({
                ...newDeviceErrors,
                [name]: [],
            });
    };

    const blurEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const validator = validations[name];
        const errors = [];

        if (validator) {
            if (validator.isRequired) {
                if (validator.isBoolean) {
                    if (value !== true || value !== false) {
                        errors.push("REQUIRED_FIELD");
                    }
                } else {
                    if (value.length < 1) {
                        errors.push("REQUIRED_FIELD");
                    }
                }
            }
        }

        setNewDevice({
            ...newDevice,
            [name]: value ? value.trim() : "",
        });

        if (errors.length > 0)
            setNewDeviceErrors({
                ...newDeviceErrors,
                [name]: errors,
            });
        else
            setNewDeviceErrors({
                ...newDeviceErrors,
                [name]: [],
            });
    };

    const hasSomeErrors = () => {
        const hasErrors = Object.keys(newDeviceErrors).some(
            (value) => newDeviceErrors[value].length > 0
        );

        return hasErrors;
    };

    useEffect(() => {
        if (device) {
            setNewDevice({
                name: device.name,
                description: device.description,
                is_active: !!device.is_active,
            });
            setNewDeviceErrors({});
        }
    }, [device]);

    useEffect(() => {
        if (devices.update.errors) {
            setNewDeviceErrors(devices.update.errors);
        }
    }, [devices.update]);

    useEffect(() => {
        if (devices.add.errors) {
            setNewDeviceErrors(devices.add.errors);
        }
    }, [devices.add]);

    return (
        <div id="Device-modal">
            <Form>
                <Input
                    id={"Devicename"}
                    type={"text"}
                    name={"name"}
                    value={newDevice["name"]}
                    onChange={(e)=> changeEvent(e)}
                    onBlur={(e)=> blurEvent(e)}
                    errors={newDeviceErrors["name"]}
                    placeholder={"name"}
                />
                <Input
                    id={"DeviceDesc"}
                    type={"text"}
                    name={"description"}
                    value={newDevice["description"]}
                    onChange={(e)=> changeEvent(e)}
                    onBlur={(e)=> blurEvent(e)}
                    errors={newDeviceErrors["description"]}
                    placeholder={"Description"}
                    isTextarea
                />
               
                <Checkbox
                    checkItem={() =>
                        setNewDevice({
                            ...newDevice,
                            is_active: !newDevice.is_active,
                        })
                    }
                    isChecked={newDevice.is_active}
                    disabled={false}
                    label="Is active?"
                />
                {!isAdd && (
                    <Button
                        btnClass={ButtonTypes.primary}
                        onClick={() =>
                            dispatch(updateDevice(newDevice, device.id))
                        }
                        loading={devices.update.loading}
                        disabled={devices.update.loading || hasSomeErrors()}
                    >
                        Save
                    </Button>
                )}
                {isAdd && (
                    <Button
                        btnClass={ButtonTypes.primary}
                        onClick={() => dispatch(addDevice(newDevice))}
                        loading={devices.add.loading}
                        disabled={devices.add.loading || hasSomeErrors()}
                    >
                        Create
                    </Button>
                )}
            </Form>
        </div>
    );
} 

export default AddDeviceModal;