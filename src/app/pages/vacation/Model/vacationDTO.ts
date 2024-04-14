export interface VacationDTO {
    vacationId: number;
    doctor: string;
    dateTime: string;
}

export interface DoctorPairDto {
    value: number;
    title: string;
}

export interface VacationResponse {
    vacations: VacationDTO[];
    doctorPairs: DoctorPairDto[];
}