import { extractCountriesClassifications } from "./domain";


describe('domains', () => {
  it('should exists', () => {
    expect(extractCountriesClassifications).toBeTruthy()
  });

  it('should return an empty structure on empty domains', () => {
    expect(extractCountriesClassifications([])).toEqual({
      countries: [],
      classifications: [],
      subClassifications: []
    })
  });

  it('should return the default values', () => {
    // arrange
    const dataIn = [
      'US_OK-WOK',
      'FR_NK-WOL',
      'FR_OK-NPP',
      'EN_NK-NRP',
      'EN_BL-WOL',
    ]
    const expected = {
      classifications: ["OK", "NK", "BL"],
      countries: ["US", "FR", "EN"],
      subClassifications: ["WOK", "WOL", "NPP", "NRP"]
    }

    // act
    const r = extractCountriesClassifications(dataIn)

    // assert
    expect(r).toEqual(expected)
  })
})
