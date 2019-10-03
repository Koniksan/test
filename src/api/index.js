export const fetchAds = async () => {
    return await fetch('https://cre-api.kufar.by/ads-search/v1/engine/v1/search/rendered-paginated?size=42&sort=lst.d&cur=BYR&cat=5070&rgn=7&lang=ru')
        .then(x => x.json())
        .catch(x => { throw new Error(x.json().errors) });
}