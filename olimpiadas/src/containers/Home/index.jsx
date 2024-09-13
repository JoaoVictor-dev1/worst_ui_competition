import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { Title, MedalTable, MedalRow, MedalCell, CountryCell, InputSlider, Button, FormContainer, TotalCell, RankCell, FlagContainer, FlagIcon, Popup, CloseButton } from './styles';


const countries = [
    'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW'
];


function Home() {
    const [countriesData, setCountriesData] = useState([
        { name: 'Brasil', gold: 5, silver: 3, bronze: 2, code: 'BR' },
        { name: 'Argentina', gold: 3, silver: 4, bronze: 5, code: 'AR' },
        { name: 'México', gold: 4, silver: 2, bronze: 3, code: 'MX' }
    ]);


    const [selected, setSelected] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);
    const [popups, setPopups] = useState([]);
    const [editButtonPositions, setEditButtonPositions] = useState({});


    // Função para duplicar um país
    const handleDuplicateCountry = (country) => {
        setCountriesData([...countriesData, { ...country }]);
    };


    // Função para mover o botão "Editar"
    const moveEditButton = (index) => {
        const newTop = `${Math.random() * 90}vh`;
        const newLeft = `${Math.random() * 90}vw`;
        setEditButtonPositions({ ...editButtonPositions, [index]: { top: newTop, left: newLeft } });
    };


    const generateRandomPopups = () => {
        const newPopups = [];
        for (let i = 0; i < 10; i++) {
            const top = `${Math.random() * 80}vh`; // Ajuste o intervalo conforme necessário
            const left = `${Math.random() * 80}vw`; // Ajuste o intervalo conforme necessário
            newPopups.push({ id: Date.now() + i, message: `País adicionado com sucesso!`, top, left });
        }
        setPopups(newPopups);
    };


    const handleAddCountry = () => {
        const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(selected);
        if (countryName) {
            setCountriesData([...countriesData, { name: countryName, gold, silver, bronze, code: selected }]);
            generateRandomPopups();
            setSelected("");
            setGold(0);
            setSilver(0);
            setBronze(0);
        }
    };


    const handleClosePopup = (id) => {
        setPopups(popups.filter(popup => popup.id !== id));
    };


    const calculateTotal = (country) => country.gold + country.silver + country.bronze;


    const sortedCountries = countriesData.sort((a, b) => a.gold - b.gold || a.silver - b.silver || a.bronze - b.bronze);


    return (
        <div>
            <Title>Ranking de Medalhas - Jogos Olímpicos</Title>
           
            <FormContainer>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    placeholder="Selecione um País"
                    searchable
                    searchPlaceholder="Buscar países"
                    className="react-flags-select"
                    countries={countries}
                />
                <InputSlider
                    type="range"
                    min="-5084"
                    max="5084"
                    step="0.01"
                    value={gold}
                    onChange={(e) => setGold(parseFloat(e.target.value))} />
                <div>Ouro: {gold.toFixed(2)}</div>
                <InputSlider
                    type="range"
                    min="-5084"
                    max="5084"
                    step="0.01"
                    value={silver}
                    onChange={(e) => setSilver(parseFloat(e.target.value))} />
                <div>Prata: {silver.toFixed(2)}</div>
                <InputSlider
                    type="range"
                    min="-5084"
                    max="5084"
                    step="0.01"
                    value={bronze}
                    onChange={(e) => setBronze(parseFloat(e.target.value))} />
                <div>Bronze: {bronze.toFixed(2)}</div>
                <Button onClick={handleAddCountry}>Adicionar País</Button>
            </FormContainer>


            <MedalTable>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>País</th>
                        <th>🥇 Ouro</th>
                        <th>🥈 Prata</th>
                        <th>🥉 Bronze</th>
                        <th>Total</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCountries.map((country, index) => (
                        <MedalRow key={index}>
                            <RankCell>{index + 1}º</RankCell>
                            <CountryCell>
                                <FlagContainer>
                                    <FlagIcon code={country.code} />
                                    {country.name}
                                </FlagContainer>
                            </CountryCell>
                            <MedalCell>{country.gold.toFixed(2)}</MedalCell>
                            <MedalCell>{country.silver.toFixed(2)}</MedalCell>
                            <MedalCell>{country.bronze.toFixed(2)}</MedalCell>
                            <TotalCell>{calculateTotal(country).toFixed(2)}</TotalCell>
                            <MedalCell>
                                <Button onClick={() => handleDuplicateCountry(country)}>
                                    Excluir
                                </Button>
                                <Button
                                    onClick={() => moveEditButton(index)}
                                    style={{
                                        position: 'absolute',
                                        top: editButtonPositions[index]?.top || 'auto',
                                        left: editButtonPositions[index]?.left || 'auto'
                                    }}
                                >
                                    Editar
                                </Button>
                            </MedalCell>
                        </MedalRow>
                    ))}
                </tbody>
            </MedalTable>


            {popups.map(popup => (
                <Popup key={popup.id} style={{ top: popup.top, left: popup.left }}>
                    {popup.message}
                    <CloseButton onClick={() => handleClosePopup(popup.id)}>X</CloseButton>
                </Popup>
            ))}
        </div>
    );
}


export default Home;