import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const DataAnggota = () => {
    const [data, setDatas] = useState(null);

    useEffect(() => {
        getNews("Programming").then(res => setDatas(res.data.articles));
    }, []);

    return (
        <>
            <SectionHeader title="Selamat Membaca" />
            {
                data ?
                    <NewsCards data={data} />
                    :
                    <InfinitySpin color="black" />
            }
        </>
    );
};


export default DataAnggota;
