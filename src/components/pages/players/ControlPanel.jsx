import React, {useRef} from 'react';
import MySelect from "../../UI/Selects/MySelect";
import Slider from "../../UI/Slider/Slider";
import MyButton from "../../UI/Buttons/MyButton";

const ControlPanel = ({callback}) => {
    const sliderDE = useRef(false);
    const selectCount = useRef(32);

    return (
        <div className={'panel'}>
            <MySelect reference={selectCount}
                      options={[
                          {value: 32, name: 'Топ-32'},
                          {value: 16, name: 'Топ-16'}
                      ]}
                      def={{value: 32, name: 'Топ-32'}}
            />
            <Slider reference={sliderDE}
                    label={'double elimination'}
            />
            <div className={'right'}>
            <MyButton onClick={() =>
                callback(selectCount.current.value, sliderDE.current.checked)}>
                Завершить квалификацию
            </MyButton>
            </div>

        </div>
    );
};

export default ControlPanel;