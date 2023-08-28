import React, { useState, useEffect } from 'react';


const images = [
  'https://lh3.googleusercontent.com/pw/AIL4fc9AabeJtMfmdJwcEDeQFB5Bx6cd_NI7oPKuDljuF8SRYx_exsiObX5UrdYRpaJHzADdGMAphqLQ-KslOhYkuXxw_u_9Rzw-s0NrksgqXP7Lapks94eB0KOv3MwflK1EQgyd3MfDgbbNk5VdTdNn7gyjzzLJcVEONY7Pg7PocrUN8349aNq5aa1iQKNBSq5sD33Pb5wOHdlqxkwPQFARWWR_dUnCtiS8g3xhW5AQPd8BzTSZmr_SJW30nBFZxKb9qOBJuOGDHH4CUeOcODgajilq4i8oOErZchNoKdMzukQdpS6VUPVh_2YvMPWIh-uCqpL1ZqkSTaW5nmKL5gDK9ers2p_AXlUJa5Lwmko2alZV4zKSRY6vCcIzuQfbxTRgMfPHjLe1pBndmZk8Sf7LNL-3Bh0hWHmiwMzOv3vIpZNZlUNqIFEBK_4ololncaM8eeoE_lAURTtJD5X-UZHAKh1g5AjdUtvv8eHsCKA6GELd0kNX3olRskG6rcpIYtVkAeun84Swrn3yhX6DwmbYuUPsVHzkMoVqqbcmwh2buvnvXpCltUlAeuKtUQqhOxGd2uHRojsOaOyoPEQnRe84khFHTmSoo-colLekeYMfuNINdg8JvJfq7pSipZxFAE9MauufflRdvS8utfUoqsWtzzu6LJErA5uw6gjiG5ON766AIbgx8wtchs37dJ8-2EXI4hRIMC1ikl4gzAPMw5ZNB4H8PP_Tf0f7ikXugeeziWtx8x21EQlJxrC9BHRwSJJOF7tZu7oPIDbEskYpi9theIqkwoAnufI86708z15iPsHeqtlIv7GU-pOl_lKu-B74jV6klZsqNu9qO3TKpJ93MSUJ-OZvLxsz3ua4Ht5lNng-ASiseOOQqOUfReIoOoKWj9XkumqPvc2XAohMQSl2FjsAjQ=w957-h718-s-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AIL4fc-cUW_fQwzKjlRpkTiXXSLtDePb1yGDf2MCyfizJXCGV5MycGxInjKoKLy5voZiHYCoteMSYU9uLCAXOvX04bowS8gxqIy8vNKqgbBss1uEFlNinBu67yBSJpww1roG4AjgioIdFuEfA5gCCMAHrPt1O3k66YhZv7D9EajZ5VRs0-Au-4nSImJIFoFuAWt28Gvy4LFmZILZlDNJzwk9Uty2Fk3zLVtY-OzpD6dJcaQ5RU6UBthcykDi2X6485LfQyKItRyITaC_guDDshlZmYfapkzUNitmiDBOG2I2oLVl5Goff5DWwudab3KpaHA-0Op70llySBQCAvsHlQ9H0uKo1qbMJUzQ8F4XIj6fSBAFEFMFB5kjFgwOywnEzpYxZXVUjjiwsBEm2RIHVJcMeVr5FKtepTSrLNGgm6Ad0HtCmr4TQjBiWLJ9_evFMdc72fn49bIrFwGJPgrNH9QUgAq-Y8NN5GCScw04rXVuZTun8zxD0nubBIWn4oxk0YXMETEwu3qns4-Cqdk6FOZvrU7Y1LFGvX6Q6bCd-Y-1CD-PO9450DAHtfyRtExnu-5DGgSxK12YkONBOop4MUuZYKjV-LB2rJ-8mSCjggjHH5Mw-UfdrWuMKRKIuA9Em1pP1XdL14HgZQBk2Neq_FIjaJthwQHU75I5Cu4_xc0luM5EDA218jZr_5cod09SBjdpsonvYPeawSr1TJQogqGOvMKA6UhstyFXJvktOKOVhDcdlU7_TIc8qW7uq9RDu0SuHgQuQE9YVg4mpBKhhyKxnVSa8C4A-KLzl88a2UB4BakK8dAwZpoAfJYpMM980wHCqzZIn6CooGEQi5vBYsgMVjajyB4k8bpI5hFdDncXaRI02wSFddEiPtburc6kOF5ngvpktIQGnhFM5FNNk5khkhn7DQ=w957-h718-s-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AIL4fc8stlD6TerRvmh6lo7rVEmG-8QzEFj_wnTwQHCcq_tcLJvzO_s9McCZLAOe3_eT6qbuRf_fjNFhoiglcWNW7uVL3delmM8QHAciOvmteMshymQTDFce973nFr3hfLpDMaUfL2zc2T2aUnAJC--eLm2vift_RSOXj8dHMN3-VWpKUKT-4bdOW_Al4X7Tr9uqa37M6b9Cnn5at3nIOiEvviw4452VkoCc94V8ee-ArvhSJhroGPucsrTnSfoXKX9JlqhExeQDB6Slm6fjvinUx95f9VgBSDq1bmhadD99q-8DzygJB6Fct3z6nHvxfu_hbbHd9qfZM7AKyXSDAe0tQ0Ot8ref2y78UDpXWfjs8swggc6wS8SG--nkqyQChaZQBVzcOq4yUBqjlDzpW5-owRfmxo4LqrG6WIhDmfxR-3jVHjNcAiZngi0O4N-XIuaivqFg91utxwv2a-wtdDngk-UoWCIV6oBU4kKzb4z90WuYw-Dkswxs3HU2ISEx3VrO-5zPpRPXg6abNmyF3TBROPmRfVyoklhLfGw00735CkFzHKYfZkw7DjGyGKIN2Y264PW-v4fBCDEu9Hb1tqEy6TNoPDQH10BY7rbaJZ--W1Ra5k8eDUC0sOOOispwTdnjoSLZ2oadEOEnBdRa-y6SgRYkYxgidepNHb9sS5ARV5DEC1hRLxjBgn8URTPoE3kjjIqaENBc6KOcN-ZgNdXNBlkJ81UTTNTXvq7RMEQt1OBDFQXAT0b8Aa61gUuCG1oE0SsgMBgls_kwtDlicd7i9E7yqlerGhcjF0k6LFeFsjekLSfeHGREVYxtV5vrS0xiC6IplDsHs9q92HM83jUOF5xFdZeqA9mhb7c0WqdjYFsbAkTrCH4cet8LQlKudM-kAjR74KAY1CZPtkpBck-SzOzktQ=w957-h718-s-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AIL4fc-UyZAkrmB5Is0_5K-dVnE0iHDAh03flKDSXauvThonrpDHFBRjUEP33j-pTUrmRBtfdE2Qisn3q5lseDIF6pzUMBLI3NrTHHZltoqHSi0gfIBUA5iySdLev3FpjepbPc8z-Tiyl_E-NDIdm9hBIQpOYlsFSu2pjj9uRrxJfw99loUESq4LcdGlQjjTyuXmC5N5_UZP-XeSyWhlpDSHDiAgoTdpR6NNGrWa-RkqS4afqtc3yq2NOlS7wqzn00qCT2zidPVSnvaxhuCzI7bNjlxUf4HcPPt2ihJMsTwxtDLww3iIQpDFO1CYP9yxbewAntSSwIkcUed34iWl4BEruxICJNPBiPYwW9nAOIcgvuvHqvt85EzRnuxV_86ZXgirNquqO-PLqCu79nLfcXLc4QKT9rbvQC8COtm5QXVj2VM2gaGvhKFSpesmB3sHXfqG1T2SiYgF43BufuminqNNI1MDVLNEIAjRgSZZpxTIVDTlj3sRchCJzYHrvRlGBCZXQWQlWicFbK4TBlon6Bi8FqJyVQemesAHnx9jSW5K5aajh-LlOjPoBwwMzPyHY2J4GwUUzVF4qZw_CwVdWw2ZQl0AE6nliZVPtLvcmGo42s7UAF83UU9XJiVahHCG4yqV_LJk09goJJ1-4co8jXwup1vrzDYZdVukP2h1N59_uSFjsRR4xIq0oE-W-eP8FEDqfccmhyqoFwIpsWrofK9qoJktIbUK3QlKRySLNrRce4UiZZVlYXaviYc_Aw-I4q7w2xpay8Kt9E5JpiMTINmcjTvpTaiPm3Eb5Gvw3JjvfFsR1YDkAQrO_YcDpMknP-cN7efbdvZ92i5xMnr7_TPRHsaPm_J9e1cnuSlMdcPR_znHLaHMVZo-_wWVNfu6WKAeDcERUOKtExafNnyH-BCBrG-vPw=w585-h945-s-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AIL4fc9DD7I7PD8csxoqm36FNi_EnIisaXlsnGjNe5NK2HOl3QfrhF62zEFxL8Tu4DyXkWHBYjTpwivUmfhCvRXY_sI68q8cyvrAEhB0H7bGn88lCT_FroOdot7oGM1qpUbY-z9tF-6drlr5i7gVWZBx8ppE1d01iHjnF7yF93CJEd3jxOzTQr7jB2XLecYB5zw0L9jgrqKCOCEsMSJWpABvwmS2aeCX6xfcW3TPCWO8XMPJ9PNXnAkfOdATt7bWgcelJ032mZp3tI0HDhW_vPmwIwyDiYkPZjd0VIPIknFkN7cWn9cldFeTBrAL2D9heQ4dxzgge_0t_SoYZEmBA-6V0HYZhw719lsPjszPBDvzasPgrmyycdJ6EipE3nkQbMEyUf-phhY9BfCN0bNyMVbsivqJ08NyyDExg4Q_u2uaXNQvPMYNImWhAwPnUSQ5RIoWbw7N4wA5E9dGrjuoWrYxFgRsC3C8HWFCnxUuC8ZyYz-QjSPyIFlX8jjJy0XYumTuGlSUsp7paQ1kaFtWPbTNwuy9PbQqHDJXH7-c7KdlPuuatfyegIBjLOqWZiyOVmxPXdyNbTwOxR24DIWGSwsuJxdzRDnSzYLWti7aPbYTgW3J576JJ1m_4-JgtbQGEZUoTP261wiFrUQLhxPnGqiz7KkMlosWvnaZQWPfumZ82K1pNFfiV0G9ChqoPAHSo92CQvsGFl9uS74WVmL_UBrhXRKrIdJF40cy-ht_4t-SJBu-TDvQeIloeDnu9jTpO_IJMEwylxHrSd5GlftF9ZoiukiJvq56qzIw0oWhNfJwZaBw2gnZwZvS-OHUj-vWurpw4XrRTJCPrmrVwW0zG0mnVMi1GzpqRcPGGoa4oR0nxuayKIF4dTA5XPT0vs3kgP0_idZXGA1LkgiQP3KY446VtZpw4A=w661-h945-s-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AIL4fc_NOKpkrmHR0xuAxzFHLwKcELgF6uaRUDOAOCschSWaB0SgGkHkvaFDjU4QlaTO0jHpGsteElNtKWPe7QvRPUN6T8okZBFRWGnqn5t9Bq-bWp0ArcuGlAY3Q0hY7tjsDYYyc_QD3AtvThqKalZPH0QeoTJplRUogm4Z7XAr0LpDT-ji2KadoK4QSFncxwASym6Utk3XGbQyTkYg2zb4bK7Bgo_M_bSzttymcpP3xlISuV7XPRtl8GhAFcv9hCStgFWGnswNg5FU4Ow3NPOStKs2v3Yy2VXpJxxXrUt6MGDcsP55ZNV_U9tVaEDMGqe5LsRoXKdd49WJ0lwv8TCs71CjAQNKjuOgpe3Ah_yXGMC_5iopu75gx-ZEnY_84wjVUth9Kud4XC8djmMC3A3vWPmvzfExAmpiyPVQ9xeKl0OFUFvwicY4yM4iOlj7jBT1Hp298N_7tcClww5WFtYEjPtHoD2P30LMuO_dokjIGM6m7YcBaK6cjHjM2gt89uYEHJn2CWhw2_Mp4jlACnInrMqNvPlXdg0AqTpQvPkr0Takc3UM2cPIvpYsGMY7OpxBQNEzc2CbdqmQBYYw_ZJ1JgyfMTzJiTOtQPitLax9FEHMonjKDOmTgK73Yu7RQys9OW2uDdk1rZbTlPn4JSB5MIgfrQB8xhjFow64EjVPzBQD-tH8yCVx-SqqTh9rAl8wyAeTUiavoGuB5DPNsEn_8lPQVQxxhEP-r1kIFkN2swYO6Rsps233dPU7bniQVdS7wIlfrIv-EnWs-oYLrNhQIONrk0X9-FzySyx5CfceOkh93AntbW4FFcQdIEksPH4XffOfNPnThevB-yhVBcxA51I0TguCC0ElqQI4Bikzhour0dUj4ZG4Cbg1HAV6Ko8v3EpKRVNnw3DWhBgrMJjlkqQpFQ=w831-h945-s-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AIL4fc-dtBb9Fyv5n9JGfwJeg-eR3cuXQcStD7wRNB_stooIthLTzVzbqc6HtCb-oEiKe_R8t4x8AJvMafUO7PQFOVW7eQcvZbI8nGiTNtzDubI-ybO_As7mxjZuqw79I7KNqZbvJDWeuahAmMc_m91tPnShk3ytePw8YL9XV3k3mcHRQZBbXmcgn_Icv_667Q4O4amZ0e780CcHVgSwdM0ak58o_ncwdp4uCzDD3hUgsH5KgAF_WJj1BsHMKb_w_N76j9eiZPwxKJJC5PSUxbF27wWUP7eClrCKWGMMXTPA5nIvx5tq_eUiN6oP-pgu2aBfnKUvQOSx4KWA7487ta_FpzqMkh6JlCoyJaK0cdWSMzDULKVphRm5LFw1Cg_Xugck8DsI9_aXKGwpyW5gSMqV9gXx1mwjVJaTIDNt9W1CCV1xTnG8TynrrrC9kLGAgiKGmbqivz3j42E9OEgy7F1bRTjI0Bs9nKD1KnKJggyG_dvWlt83RpVJ6H4nBRH85WREVI0uI6Hd9mjebOumusw_16XnzK-aDYOe80Lne9iW2hUCDJiM7bEIqtoQ-zgd3Z6j1vuAe895tCeEPKCATrgU1it3i7B9vXKz7HL9Qaqte7Q2tFI9NSx9v7GRwgQ4JS5dwhsSCBYMvIMVyFAJ1dk1lV09uHP06nZlXd6744IwyM8fvosQWTAtTmUi7DxOOKk-xg1TemcVSlVLkLAprSEUZ0jwo4aEKQcJXtS3G30JHTwP_heSLKQR3ri6l7rJQ7umd-jJxXxporFt-4u0zaBZ7ppAwkbk_9FDHZ1cPZ9uO0K9nKkeANX81ZcbvodhkOCVYp_ocelx81gUpuTK4DHMpvoe6QC1WVBuzyhwxl1Hx23UbKYrCaaT_8QHbR376QhPaJdthBFyfSZiZo8vpuYJ72RbUw=w697-h945-s-no?authuser=0'
  // Dodajte više linkova prema vašim slikama...
];

const Body = () => {

  const [isImageExpanded, setImageExpanded] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState('');
  const [serviceData, setServiceData] = useState([]);

  const handleImageClick = (imageUrl) => {
    setImageExpanded(true);
    setExpandedImageUrl(imageUrl);
  };

  const handleExpandedImageClick = () => {
    setImageExpanded(false);
    setExpandedImageUrl('');
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/user/types");
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    }

    fetchData();
  }, []);
  

  
  

  
  
  return (
    <div className="body-container">
       <div className="sectionaboutus">
          <p>Dobrodošli u Frizerski salon "Angel's", gdje vaša ljepota dolazi do izražaja!</p>
       </div>

       <div className="price-list">
          <h2>Cjenik</h2>
          <ul>
             {serviceData.map((service) => (
             <li key={service.typeid}>
               <h3>{service.type_name}</h3>
               <p>{service.price}$</p>
             </li>
            ))}
          </ul>
        </div>


        <div className="section">
            <h2>Galerija</h2>
            <div className="gallery-container">
                {images.map((imageUrl, index) => (
                <div key={index} className="image-item">
                <img src={imageUrl} alt={`Image ${index + 1}`} 
                 onClick={() => handleImageClick(imageUrl)}/>
            </div>
            ))}
            </div>
      
            {isImageExpanded && (
               <div className="expanded-image-overlay" onClick={handleExpandedImageClick}>
               <img src={expandedImageUrl} alt="Expanded Image" className="expanded-image" />
               </div>
              )}
            </div>
        </div>
        );
};

export default Body;



