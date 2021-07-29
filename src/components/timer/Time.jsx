import { useState, useEffect } from "react";
import "./Time.scss";

let options = {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
};

export const Time = ({ name }) => {
	const [time, setTime] = useState(new Date().toLocaleString("en-US", options));
	const [greetingString, setGreetingString] = useState("Good Morning");
	const [secondsDeg, setSecondsDeg] = useState(0);
	const [minutesDeg, setMinutesDeg] = useState(0);
	const [hoursDeg, setHoursDeg] = useState(0);

	const handleGreetingString = (timeArr) => {
		if (timeArr[0] < "12" && timeArr[3] === "AM") {
			setGreetingString("Good Morning");
		} else if (
			(timeArr[0] < "5" || timeArr[0] === "12") &&
			timeArr[3] === "PM"
		) {
			setGreetingString("Good Afternoon");
		} else {
			setGreetingString("Good Evening");
		}
	};

	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleString("en-US", options));
		}, 1000);

		let timePieces = time.replaceAll(":", " ").split(" ");
		document.title = time;

		let hours = timePieces[0];
		let minutes = timePieces[1];
		let seconds = timePieces[2];

		handleGreetingString(timePieces);
		setSecondsDeg(seconds * (360 / 60));
		setMinutesDeg(minutes * (360 / 60));
		setHoursDeg(hours * (360 / 12) + minutes * (360 / 12 / 60));
		// setHoursDeg(timePieces[0] * 30);
	});

	return (
		<div className='time'>
			<div className='time__clock'>
				<div className='time__clock__twelve-six'>
					<div className='twelve' />
					<div className='six' />
				</div>
				<div className='time__clock__three-nine'>
					<div className='three' />
					<div className='nine' />
				</div>
				<div className='time__clock__ticks'>
					<div className='tick'></div>
					<div className='tick'></div>
				</div>
				<div className='time__clock__ticks1'>
					<div className='tick'></div>
					<div className='tick'></div>
				</div>
				<div className='time__clock__ticks2'>
					<div className='tick'></div>
					<div className='tick'></div>
				</div>
				<div className='time__clock__ticks3'>
					<div className='tick'></div>
					<div className='tick'></div>
				</div>
				<div className='minute-ticks'>
					<div className='time__clock__minuteTick mt1'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt2'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt3'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt4'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
				</div>
				<div className='minute-ticks1'>
					<div className='time__clock__minuteTick mt1'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt2'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt3'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt4'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
				</div>
				<div className='minute-ticks2'>
					<div className='time__clock__minuteTick mt1'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt2'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt3'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt4'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
				</div>
				<div className='minute-ticks3'>
					<div className='time__clock__minuteTick mt1'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt2'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt3'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt4'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
				</div>
				<div className='minute-ticks4'>
					<div className='time__clock__minuteTick mt1'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt2'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt3'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt4'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
				</div>
				<div className='minute-ticks5'>
					<div className='time__clock__minuteTick mt1'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt2'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt3'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
					<div className='time__clock__minuteTick mt4'>
						<div className='Mtick'></div>
						<div className='Mtick'></div>
					</div>
				</div>
				<div className='time__clock-center' />
				<div
					className='time__clock-seconds'
					style={{
						transformOrigin: "center bottom",
						transform: `rotate(${secondsDeg}deg)`,
					}}
				></div>
				<div
					className='time__clock-minutes'
					style={{
						transformOrigin: "center bottom",
						transform: `rotate(${minutesDeg}deg)`,
					}}
				></div>
				<div
					className='time__clock-hours'
					style={{
						transformOrigin: "center bottom",
						transform: `rotate(${hoursDeg}deg)`,
					}}
				></div>
			</div>
		</div>
	);
};
