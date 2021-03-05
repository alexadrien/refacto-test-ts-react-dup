import React, { useState, useEffect } from "react"
import { CountriesClassificationsProvider, extractCountriesClassifications } from "../data/domain"

export const CountryClassifications: React.FC<{ domains: string[] }> = ({ domains, children }) => {
    const [classifications, setClassifications] = useState(extractCountriesClassifications(domains))

    useEffect(() => {
        setClassifications(extractCountriesClassifications(domains))
    }, [domains])

    return <CountriesClassificationsProvider value={classifications}>
        {children}
    </CountriesClassificationsProvider>
}