import { DatePicker, DatePickerProps, Radio, RadioChangeEvent } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { DateForms } from "../types";

dayjs.extend(customParseFormat);

const locale = 'en-CA'

export enum DateType{
	day = 'day',
	period = 'period'
}

interface FilterProps{
	onChangeDate: (newDate: DateForms) => void
}

export const Filter = ({onChangeDate}: FilterProps) => {

    const [dateType, setDateType] = useState(DateType.day);

  const handleChangeRadio = (e: RadioChangeEvent) => {
    setDateType(e.target.value);
  };

  const handleChangeDate = (value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string,) => {
	const convertedDate = Array.isArray(dateString) ? dateString.map(i => convertDate(i)) : convertDate(dateString)
	onChangeDate(convertedDate)
  };

  const convertDate = (date: string) => date !== new Date().toLocaleDateString(locale) && date

  const disableDate = (current: any) => {
	return current && current.valueOf() > Date.now()
  }
  
  return (
	<>
    <Radio.Group onChange={handleChangeRadio} value={dateType}>
		{Object.values(DateType).map((i) => <Radio value={i} key={i}>{i}</Radio>)}
    </Radio.Group>
	<div>
	{
		dateType === DateType.day
		? <DatePicker disabledDate={disableDate} onChange={handleChangeDate} />
		: <DatePicker.RangePicker disabledDate={disableDate} onChange={handleChangeDate} />
	}
	</div>
	
	</>
  );
}
