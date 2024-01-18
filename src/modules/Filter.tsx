import { DatePicker, DatePickerProps, Radio, RadioChangeEvent } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useEffect, useState } from "react";

dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';
const locale = 'en-CA'

export enum DateType{
	day = 'day',
	period = 'period'
}

interface FilterProps{
	onChangeDate: (newDate: string | string[]) => void
}

export const Filter = ({onChangeDate}: FilterProps) => {

	const nowDate = dayjs(new Date().toLocaleDateString(locale), dateFormat)

	const [dateType, setDateType] = useState(DateType.day);

  const handleChangeRadio = (e: RadioChangeEvent) => {
    setDateType(e.target.value);
  };

  const handleChangeDate = (value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string,) => {
	onChangeDate(dateString)
  };

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
		? <DatePicker disabledDate={disableDate} onChange={handleChangeDate} defaultValue={nowDate} />
		: <DatePicker.RangePicker disabledDate={disableDate} onChange={handleChangeDate} defaultValue={[nowDate, nowDate]} />
	}
	</div>
	
	</>
  );
}
