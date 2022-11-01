const Categories = [
    {
        id:1 ,
        title: "FC Barcelona 2022/23 Home Jersey" ,
        price: 4695 ,
        category: "League_Jersey" ,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95f9c8a3-de51-415b-bc8a-5268d706ed42/fc-barcelona-2021-22-stadium-home-football-shirt-8Qw2SL.png' 
    },

    {
        id:2 ,
        title: "Real Madrid 2022/23 Home Jersey" ,
        price: 3299 ,
        category: "League_Jersey" ,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a83a28f26a5a41809796ad1600955394_9366/Real_Madrid_21-22_Home_Jersey_White_GR3994_01_laydown.jpg'
    },
    {
        id:3 ,
        title: "Manchester City 2022/23 Home Jersey" ,
        price: 3299 ,
        category: "League_Jersey" ,
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/759204/01/fnd/IND/fmt/png/Manchester-City-Home-Replica-Kid's-Jersey"
    },

    {
        id:4,
        title: "Manchester United 2022/23 Home Jersey" ,
        price: 4999 ,
        category: "League_Jersey" ,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhngIebCNnyE6bRUkoRep3ohvRtFGrVc6AirdAyNaCarx5Jja1wjRgiYdT4aTmjaHoE7CgEfJ3UqafCuub0km4CMPC_cFFciGNXGfwfEsmzPWsOniU3fLjThv2HrG6_ckYcHqUEJEZt6dhoLrB1coJDLOHZOD7tyXWNBtqy8wY11WtaOyFGZLkUcwLM5w/s600/man%20utd%2022%2023%20home%20kit%20%2812%29.jpg'
    },

    {
        id:5,
        title: "Liverpool 2022/23 Home Jersey" ,
        price: 3499 ,
        category: "League_Jersey" ,
        image: 'https://cdn.shopify.com/s/files/1/0462/0120/8982/products/DJ7647-609-PHSFH001_400x.jpg?v=1652765721'
    },

    {
        id:6,
        title: "Chelsea 2022/23 Home Jersey",
        price: 3500,
        category: "League_Jersey",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjAhxQvZPY7RPwV8cT-u77hGbPCL8intMqYL0S4yrg7vfproYEy8rXiD43PuHnMnIZ9MOH3EPvdZ5MLaVmsqY-ihlXosIGDe6erFH4FAnAyF1Q3FmFmPa0D_fjvbMTzQxowkppbvkCpGan5nsnEf1MrmGXTAfc3q6KOkp9NJdWjpFrUksg9nbHH94X/s600/chelsea-22-23-home-kit-7.jpg'
    },

    {
        id:7,
        title: "Paris Saint German 2022/23 Home Jersey",
        price: 1199,
        category: "League_Jersey",
        image: 'http://cdn.shopify.com/s/files/1/0565/8142/3263/products/PSGHome2022_23.png?v=1659029317'
    },

    {
        id:8,
        title: "Juventus 2022/23 Home Jersey",
        price: 1199,
        category: "League_Jersey",
        image: 'https://cf.goaljerseys.cn/upload/ttmall/img/20220514/cf768c208b357112f9e7913746c9be0a.png'
    },

    {
        id:9,
        title: "Bayern Munich 2022/23 Home Jersey",
        price: 2499,
        category: "League_Jersey",
        image: 'https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/30256/fc-bayern-trikot-home-22-23.png'
    },

    {
        id:10,
        title: "BVB 2022/23 Home Jersey",
        price: 2499,
        category: "League_Jersey",
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/765891/01/fnd/EEA/fmt/png/Borussia-Dortmund-Home-22/23-Replica-Jersey-Youth'
    },
   ///////////////////////////////////////////////////////
    {
        id: 11,
        title: "Argentina 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faecea8cda3b4a948605ae83010a30c7_9366/Argentina_22_Home_Jersey_White_HF2158_01_laydown.jpg'
    },

    {
        id: 12,
        title: "Brazil 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK_LCBYXUTEtxkc4iBm_LFhjS1JvCyShba9uvHKEEdnksJSNqK5GS0gwSwQAKwdG_lEEUBUE4rRvUxSPc08Gzy_rgrDylhPae6AEm41yiNmtzPr5e82vGrVc_GCedJm8T00hvx0JDsrHAOQA-spyvLNN26-8OyC5KacHg2LeWeEwl54AvWnwFYP3bdjw/s1000/nike-brazil-2022-world-cup-kit-features-amazing-collar-detail%20%2810%29.jpg'
    },

    {
        id: 13,
        title: "France 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgbg3cQueUktV5nqtjWb05E4XUexrhZKrkfmXaH9YZC8JfepmXG-qgJs_XGO1FmacMCd_cng6eRxuikKRZcYiHO_AYMGnagLFMPhDgp8Qd1zYhdru3c1OmAkbEXUNOkvUWWcrRXAuyUuI1wL7lsYRIL32uOqs0eXmZp8SOOE2Vh9d0mAIYeTV576lu3Jw=s1000'
    },

    {
        id: 14,
        title: "Germany 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://i0.wp.com/www.copycatz.in/wp-content/uploads/2022/09/Germany-Home-FIFA-World-Cup-Qatar-Jersey.jpg?w=669&ssl=1'
    },

    {
        id:15,
        title: "Belgium 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/31aff878ec304a13a19daec300e4298b_9366/Belgium_22_Home_Jersey_Red_HE6632_01_laydown.jpg'
    },

    {
        id:16,
        title: "Portugal 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://pbs.twimg.com/media/FVm5UHKWYAA8byq?format=jpg&name=900x900'
    },

    {
        id:17,
        title: "Spain 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d75f8ea0f0ff4a0e8830ae880131076c_9366/Spain_22_Home_Jersey_Red_HF1408_01_laydown.jpg'
    },

    {
        id: 18,
        title: "Italy 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://cdn.shopify.com/s/files/1/0071/4103/2003/products/ItalyHomeOG1.jpg?v=1660151079'
    },

    {
        id: 19,
        title: "Uruguay 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://www.mailloten.com/wp-content/uploads/2022/06/2B5DF523-CCDD-4077-89C0-62FAB7CC7606.png'
    },

    {
        id:20,
        title: "England 2022 World Cup Jersey",
        price: 4999,
        category: "International_Jersey",
        image: 'https://i0.wp.com/www.copycatz.in/wp-content/uploads/2022/09/England-Away-World-Cup-Jersey.jpeg?w=747&ssl=1'
    },

    //////////////////////////////////////////////////////////////

    {
        id:21,
        title: "Barca Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://www.soccerbible.com/media/119529/barca-concept-1-min.jpg'
    },

    {
        id:22,
        title: " Real Madrid Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://i.pinimg.com/474x/0a/66/b0/0a66b077641142418f9a6c67de99c14f.jpg'
    },

    {
        id:23,
        title: " Manchester City Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://cdnb.artstation.com/p/assets/images/images/041/290/287/large/chg_studio2021-d6804a71-9e31-4cf8-a501-67934ce31af2-rw-3840.jpg?1631279897'
    },
    
    {
        id:24,
        title: "Manchester United Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://pbs.twimg.com/media/ECkXAi6XkAAAgM8.jpg'
    },

    {
        id:25,
        title: "Liverpool Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://pbs.twimg.com/media/EwlpC5JXAAIJ6XS.jpg:large'
    },

    {
        id:26,
        title: "Chelsea Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://www.soccerbible.com/media/121132/chelsea-3-min.jpg'
    },

    {
        id:27,
        title: "Paris Saint German Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://pbs.twimg.com/media/EN2GZgZW4AYAeGo.jpg'
    },

    {
        id:28,
        title: "Juventus Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://i.pinimg.com/originals/87/0b/d7/870bd70ee509a5bb12b3aecd7326b46e.png'
    },

    {
        id:29,
        title: "FC Bayern Munich Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://www.thickaccent.com/wp-content/uploads/2021/11/FFKXiOqXsAEPoz--819x1024.jpeg'
    },

    {
        id:30,
        title: "Borussia Dortmund Design Concept",
        price: 2999,
        category: "Design_Concept_Jersey",
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8bae1490692111.5e1e0e78625d5.jpg'
    },
    
]

export default Categories