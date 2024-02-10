import moment from "moment";

export const formatDateYYYYMMM = (date) => {
	return moment(date).format("YYYY MMM");
};

export const formatDateLL = (date) => {
	return moment(date).format("LL");
};

export const formatTimeLT = (time) => {
	return moment(time, "HH:mm:ss").format("LT");
};

export const formatTimeHHmm = (time) => {
	return moment(time, "HH:mm:ss").format("HH:mm");
};


