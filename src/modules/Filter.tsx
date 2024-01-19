import { DatePicker, Radio, RadioChangeEvent } from "antd";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { OneOrArr, Params } from "../types";
import { convertOneOrArr } from "../lib/fn";
import { RangePickerProps } from "antd/es/date-picker";

dayjs.extend(customParseFormat);

const locale = 'en-CA'

export enum DateType{
	day = 'day',
	period = 'period'
}

interface FilterProps{
	onChangeDate: (newDate: OneOrArr<string>) => void
}

export const Filter = ({onChangeDate}: FilterProps) => {
  const [radio, setRadio] = useState(DateType.day);

  const disableDate: RangePickerProps['disabledDate'] = (current) => current && current.valueOf() > Date.now()

  const handleRadio = (e: RadioChangeEvent) => setRadio(e.target.value);

  const handleDate = (_: unknown, newDate: Params) => {
	const convertedDate = convertOneOrArr(newDate, convertDate)
	onChangeDate(convertedDate)
  };

  const convertDate = (date: Params) => date === new Date().toLocaleDateString(locale) ? '' : date  
  
  return (
	<div className="filter">
        <Radio.Group onChange={handleRadio} 
                     value={radio}
        >
            {Object.values(DateType).map((i) => <Radio value={i} key={i}>{i}</Radio>)}
		</Radio.Group>
        <div>
		{
			radio === DateType.day
			? <DatePicker 
				disabledDate={disableDate} 
				onChange={handleDate} 
			/>
			: <DatePicker.RangePicker 
				disabledDate={disableDate} 
				onChange={handleDate} 
			/>
		}
		</div>
	</div>
  );
}
