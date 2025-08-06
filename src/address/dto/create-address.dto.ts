export class CreateAddressDto {
  street: string;
  landmark?: string;
  countryId: number;
  stateId: number;
  cityId: number;
  pincodeId: number;
  geoLocationId?: number
}
