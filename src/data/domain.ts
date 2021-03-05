import React, { useContext, useEffect, useState } from "react"

export interface ICountryClassification {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
}

export const extractCountriesClassifications = (domains: string[]): ICountryClassification => {
    const result: ICountryClassification = {
        countries: [],
        classifications: [],
        subClassifications: []
    }

    for (let i = 0; i < domains.length; i++) {
        if (result.countries.indexOf(domains[i].substring(0, 2)) <= 0) {
            result.countries.push(domains[i].substring(0, 2))
        }

        result.classifications.push(domains[i].substring(3, 5));

        let flag = false;

        for (let j = 0; j < result.subClassifications.length; j++) {
            if (result.subClassifications[j] == domains[i].substring(6)) {
                flag = true
                break;
            }
        }
        if (!flag) {
            result.subClassifications.push(domains[i].substring(6));
        }
    }

    const classifications = result.classifications.filter((e, i, l) => l.indexOf(e) === i)

    return {
        ...result,
        classifications
    }
}

const countriesClassificationsContext = React.createContext<ICountryClassification>({ countries: [], classifications: [], subClassifications: [] })

export const CountriesClassificationsProvider = countriesClassificationsContext.Provider;

export const useCountriesClassifications = (): ICountryClassification => {
    return useContext(countriesClassificationsContext)
}