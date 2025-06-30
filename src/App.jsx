import React, { useState, useEffect } from 'react';

// Main application component
const App = () => {
  // Language state, default to English
  const [language, setLanguage] = useState('en'); // Set default language to 'en'

  // Translation content object
  const translations = {
    zh: {
      // Navigation
      home: '首页',
      ourServices: '我们的服务',
      whyChooseUs: '选择我们',
      whoWeServe: '服务对象',
      contactUs: '联系我们',
      // Hero Section
      heroHeadline: '您值得信赖的美国翻新伙伴',
      heroSubheading: '专注于为中国品牌提供电动出行及电子产品翻新服务',
      partnerWithUsButton: '与我们合作',
      // Box Titles
      aboutZiTengTrading: '关于ZiTeng Trading',
      our5StepProcess: '我们的5步流程',
      ourAdvantages: '我们的优势',
      ourCustomers: '我们的客户',
      partnerWithUsBox: '与我们合作',
      // Box Content
      aboutZiTengTradingContent: 'ZiTeng Trading 拥有十余年经验，是美国领先的电动出行和消费电子产品退货翻新中心。我们服务于300多家美国零售商，每年翻新超过10,000辆电动自行车/滑板车、300,000多件电子设备和5,000件家具/家居用品。',
      our5StepProcessContent: '我们全面的翻新流程包括：1. 评估与分级（功能正常、可修复或报废）。2. 部件维修（电机、电池、控制板、刹车、车架）。3. 深度清洁与外观修复。4. 全面测试与质量控制。5. 重新包装并附上翻新标签及90天保修。',
      ourAdvantagesContent: '我们提供：美国本地运营（无需运回中国），快速周转（1-3天），工厂级维修标准（认证技术人员），降低退货损失，强大的品牌控制，以及多语言支持（中英文双语团队）。',
      ourCustomersContent: '我们与以下客户合作：出口至美国平台（亚马逊、沃尔玛、TikTok Shop）的中国制造商，寻求B2B清算解决方案的品牌，处理退货/积压库存的跨境卖家。我们支持的产品类型包括：电动滑板车、电动自行车、便携式电源、智能头盔、充电器、配件。',
      partnerWithUsBoxContent: '正在美国寻找可靠的翻新解决方案？我们为美国客户的退货、第三方物流或品牌仓库的积压库存以及保修索赔与维修物流提供灵活的买断或寄售方案。请联系我们获取定制服务计划：support@rebornebike.com | +1-XXX-XXX-XXXX。',
      // Section Titles
      our5StepRefurbishingProcessSection: '我们的5步翻新流程',
      whyChooseZiTengTradingSection: '为何选择 ZiTeng Trading？',
      whoWeServeSection: '我们的服务对象',
      clientTestimonialsSection: '客户评价',
      // 5-Step Process details
      assessmentGrading: '评估与分级',
      assessmentGradingDesc: '分类为功能正常、可修复或报废。',
      componentRepair: '部件维修',
      componentRepairDesc: '电机、电池、控制板、刹车、车架。',
      deepCleaningRestoration: '深度清洁与外观修复',
      deepCleaningRestorationDesc: '彻底清洁并恢复产品外观。',
      fullTestingQC: '全面测试与质控',
      fullTestingQCDesc: '严格的测试与质量控制。',
      repackagingWarranty: '重新包装与保修',
      repackagingWarrantyDesc: '附翻新标签及90天保修。',
      // Why Choose Us details
      localUSOperations: '本地美国运营',
      localUSOperationsDesc: '无需将产品运回中国，节省时间和成本。',
      fastTurnaround: '快速周转',
      fastTurnaroundDesc: '1至3天翻新周期，快速重返市场。',
      factoryLevelRepair: '工厂级维修',
      factoryLevelRepairDesc: '电机/电池/PCB认证技术人员确保高标准。',
      reducedReturnLosses: '降低退货损失',
      reducedReturnLossesDesc: '削减仓储和清算成本。',
      brandControl: '品牌控制',
      brandControlDesc: '标准化翻新流程保护您的品牌声誉。',
      multilingualSupport: '多语言支持',
      multilingualSupportDesc: '中英文双语支持团队。',
      // Who We Serve details
      weCollaborateWith: '我们与以下客户合作：',
      chineseManufacturers: '出口至美国平台（亚马逊、沃尔玛、TikTok Shop）的中国制造商',
      brandsSeekingLiquidation: '寻求B2B清算解决方案的品牌',
      crossBorderSellers: '处理退货/积压库存的跨境卖家',
      productTypesSupport: '我们支持的产品类型：',
      eScooters: '电动滑板车（可折叠、坐式、越野）',
      eBikes: '电动自行车（通勤、胖胎、山地）',
      portablePowerStations: '便携式电源',
      smartHelmetsAccessories: '智能头盔、充电器、配件',
      // Testimonials
      testimonial1: '“ZiTeng Trading 帮助我们将美国退货转化为盈利渠道。快速、专业、可靠。”',
      testimonial1Author: '– 深圳电动自行车制造商',
      testimonial2: '“他们彻底改变了我们品牌在美国的售后体验。”',
      testimonial2Author: '– 跨境亚马逊卖家',
      // Footer
      footerRefurbishingCenter: '翻新中心 – 洛杉矶 | 休斯顿 | 凤凰城',
      footerLAFacilityCapacity: '📍 30,000平方英尺洛杉矶工厂 | 日处理能力：100+台',
      footerQuickLinks: '快速链接',
      footerContactInformation: '联系方式',
      footerEmail: '邮箱',
      footerPhone: '电话',
      footerContactForm: '联系表单',
      footerAllRightsReserved: '保留所有权利。',
    },
    en: {
      // Nav
      home: 'Home',
      ourServices: 'Our Services',
      whyChooseUs: 'Why Choose Us',
      whoWeServe: 'Who We Serve',
      contactUs: 'Contact Us',
      // Hero
      heroHeadline: 'Your Trusted U.S. Refurbishing Partner',
      heroSubheading: 'Specializing in E-Mobility & Electronics for Chinese Brands',
      partnerWithUsButton: 'Partner with Us',
      // Box Titles
      aboutZiTengTrading: 'About ZiTeng Trading',
      our5StepProcess: 'Our 5-Step Process',
      ourAdvantages: 'Our Advantages',
      ourCustomers: 'Our Customers',
      partnerWithUsBox: 'Partner With Us',
      // Box Content
      aboutZiTengTradingContent: 'ZiTeng Trading has over a decade of experience as the premier refurbishing center for e-mobility and consumer electronics returns in the United States. We serve over 300 U.S. retailers and annually refurbish 10,000+ e-bikes/scooters, 300,000+ electronic devices, and 5,000+ furniture/home goods.',
      our5StepProcessContent: 'Our comprehensive refurbishing process includes: 1. Assessment & Grading (functional, repairable, scrap). 2. Component Repair (motors, batteries, control boards, brakes, frames). 3. Deep Cleaning & Cosmetic Restoration. 4. Full Testing & Quality Control. 5. Repackaging with Refurbished Labels & 90-Day Warranty.',
      ourAdvantagesContent: 'We offer: Local U.S. Operations (no need to ship back to China), Fast Turnaround (1-3 days), Factory-Level Repair Standards (certified technicians), Reduced Return Losses, Strong Brand Control, and Multilingual Support (Mandarin-English bilingual team).',
      ourCustomersContent: 'We collaborate with: Chinese manufacturers exporting to U.S. platforms (Amazon, Walmart, TikTok Shop), Brands seeking B2B liquidation solutions, Cross-border sellers dealing with returns/overstock. We support product types including: E-Scooters, E-Bikes, Portable Power Stations, Smart Helmets, Chargers, Accessories.',
      partnerWithUsBoxContent: 'Looking for a reliable refurbishing solution in the U.S.? We offer flexible buyout or consignment options for returns from U.S. customers, overstock from 3PL or brand warehouses, and warranty claims & repair logistics. Contact us for a tailored service plan: support@rebornebike.com | +1-XXX-XXX-XXXX.',
      // Section Titles
      our5StepRefurbishingProcessSection: 'Our 5-Step Refurbishing Process',
      whyChooseZiTengTradingSection: 'Why Choose ZiTeng Trading?',
      whoWeServeSection: 'Who We Serve',
      clientTestimonialsSection: 'Client Testimonials',
      // 5-Step Process details
      assessmentGrading: 'Assessment & Grading',
      assessmentGradingDesc: 'Classify as functional, repairable, or scrap.',
      componentRepair: 'Component Repair',
      componentRepairDesc: 'Motors, batteries, control boards, brakes, frames.',
      deepCleaningRestoration: 'Deep Cleaning & Cosmetic Restoration',
      deepCleaningRestorationDesc: 'Thorough cleaning and restoration of appearance.',
      fullTestingQC: 'Full Testing & QC',
      fullTestingQCDesc: 'Rigorous testing and quality control.',
      repackagingWarranty: 'Repackaging & Warranty',
      repackagingWarrantyDesc: 'With refurbished labels & 90-Day Warranty.',
      // Why Choose Us details
      localUSOperations: 'Local U.S. Operations',
      localUSOperationsDesc: 'No need to ship products back to China, saving time and costs.',
      fastTurnaround: 'Fast Turnaround',
      fastTurnaroundDesc: '1 to 3 days refurbishing lead time for quick re-entry into market.',
      factoryLevelRepair: 'Factory-Level Repair',
      factoryLevelRepairDesc: 'Motor/battery/PCB-certified technicians ensure high standards.',
      reducedReturnLosses: 'Reduced Return Losses',
      reducedReturnLossesDesc: 'Cut down on warehousing and liquidation costs.',
      brandControl: 'Brand Control',
      brandControlDesc: 'Standardized refurb flow protects your brand reputation.',
      multilingualSupport: 'Multilingual Support',
      multilingualSupportDesc: 'Mandarin-English bilingual support team.',
      // Who We Serve details
      weCollaborateWith: 'We collaborate with:',
      chineseManufacturers: 'Chinese manufacturers exporting to U.S. platforms (Amazon, Walmart, TikTok Shop)',
      brandsSeekingLiquidation: 'Brands seeking B2B liquidation solutions',
      crossBorderSellers: 'Cross-border sellers dealing with returns/overstock',
      productTypesSupport: 'Product Types We Support:',
      eScooters: 'E-Scooters (foldable, seated, off-road)',
      eBikes: 'E-Bikes (commuter, fat tire, mountain)',
      portablePowerStations: 'Portable Power Stations',
      smartHelmetsAccessories: 'Smart Helmets, Chargers, Accessories',
      // Testimonials
      testimonial1: '“ZiTeng Trading helped us turn our U.S. returns into a profitable channel. Fast, professional, and reliable.”',
      testimonial1Author: '– Shenzhen-based E-Bike Manufacturer',
      testimonial2: '“They transformed our brand’s U.S. after-sales experience.”',
      testimonial2Author: '– Cross-border Amazon Seller',
      // Footer
      footerRefurbishingCenter: 'Refurbishing Center – Los Angeles | Houston | Phoenix',
      footerLAFacilityCapacity: '📍 30,000 sq.ft. LA facility | Daily Capacity: 100+ units',
      footerQuickLinks: 'Quick Links',
      footerContactInformation: 'Contact Information',
      footerEmail: 'Email',
      footerPhone: 'Phone',
      footerContactForm: 'Contact Form',
      footerAllRightsReserved: 'All rights reserved.',
    },
  };

  // Get translated content based on current language
  const t = translations[language];

  // Define box data using translation keys
  const boxData = [
    {
      title: t.aboutZiTengTrading,
      content: t.aboutZiTengTradingContent,
    },
    {
      title: t.our5StepProcess,
      content: t.our5StepProcessContent,
    },
    {
      title: t.ourAdvantages,
      content: t.ourAdvantagesContent,
    },
    {
      title: t.ourCustomers,
      content: t.ourCustomersContent,
    },
    {
      title: t.partnerWithUsBox,
      content: t.partnerWithUsBoxContent,
    },
  ];

  // activeIndex state to track which box is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle mouse leaving the entire box container, reset activeIndex to close all dropdowns
  const handleContainerMouseLeave = () => {
    setTimeout(() => {
      setActiveIndex(null);
    }, 200);
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold text-gray-900 tracking-wide">
            ZiTeng Trading
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">{t.home}</a>
            <a href="#what-we-do" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">{t.ourServices}</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">{t.whyChooseUs}</a>
            <a href="#who-we-serve" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">{t.whoWeServe}</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">{t.contactUs}</a>
            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Large banner with text overlay */}
      <section className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Suspension-Fork.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            {t.heroHeadline}
          </h1>
          <p className="mt-4 text-lg md:text-2xl drop-shadow-lg">
            {t.heroSubheading}
          </p>
          <a href="#interactive-boxes" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            {t.partnerWithUsButton}
          </a>
        </div>
      </section>

      {/* Interactive Box Container - now acting as key service highlights */}
      <div id="interactive-boxes"
        className="flex flex-col md:flex-row justify-center items-stretch gap-4 max-w-7xl mx-auto py-12 px-4 md:px-8 -mt-20 relative z-10"
        onMouseLeave={handleContainerMouseLeave} // Close all boxes when mouse leaves the container
      >
        {boxData.map((box, index) => (
          <BoxItem
            key={index}
            title={box.title}
            isActive={activeIndex === index} // Determine if the current box is active
            onMouseEnter={() => setActiveIndex(index)} // Trigger on mouse enter
          />
        ))}
      </div>

      {/* Dropdown content area, occupying full width below interactive boxes */}
      {activeIndex !== null && (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            {boxData[activeIndex].title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            {boxData[activeIndex].content}
          </p>
        </div>
      )}

      {/* Our Services Section - based on "Our 5-Step Process" */}
      <section id="what-we-do" className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{t.our5StepRefurbishingProcessSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">1.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.assessmentGrading}</h3>
            <p className="text-gray-600 text-sm">{t.assessmentGradingDesc}</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">2.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.componentRepair}</h3>
            <p className="text-gray-600 text-sm">{t.componentRepairDesc}</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">3.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.deepCleaningRestoration}</h3>
            <p className="text-gray-600 text-sm">{t.deepCleaningRestorationDesc}</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">4.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.fullTestingQC}</h3>
            <p className="text-gray-600 text-sm">{t.fullTestingQCDesc}</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">5.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.repackagingWarranty}</h3>
            <p className="text-gray-600 text-sm">{t.repackagingWarrantyDesc}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - based on "Our Advantages" */}
      <section id="why-choose-us" className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{t.whyChooseZiTengTradingSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">🚚</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.localUSOperations}</h3>
              <p className="text-gray-700">{t.localUSOperationsDesc}</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">⚡</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.fastTurnaround}</h3>
              <p className="text-gray-700">{t.fastTurnaroundDesc}</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">🧰</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.factoryLevelRepair}</h3>
              <p className="text-gray-700">{t.factoryLevelRepairDesc}</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">📉</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.reducedReturnLosses}</h3>
              <p className="text-gray-700">{t.reducedReturnLossesDesc}</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">🛡️</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.brandControl}</h3>
              <p className="text-gray-700">{t.brandControlDesc}</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">💬</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.multilingualSupport}</h3>
              <p className="text-gray-700">{t.multilingualSupportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{t.whoWeServeSection}</h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t.weCollaborateWith}</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>{t.chineseManufacturers}</li>
              <li>{t.brandsSeekingLiquidation}</li>
              <li>{t.crossBorderSellers}</li>
            </ul>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t.productTypesSupport}</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>{t.eScooters}</li>
              <li>{t.eBikes}</li>
              <li>{t.portablePowerStations}</li>
              <li>{t.smartHelmetsAccessories}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{t.clientTestimonialsSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <p className="italic text-lg text-gray-700 mb-4">
              {t.testimonial1}
            </p>
            <p className="font-semibold text-gray-800">{t.testimonial1Author}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <p className="italic text-lg text-gray-700 mb-4">
              {t.testimonial2}
            </p>
            <p className="font-semibold text-gray-800">{t.testimonial2Author}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4 md:px-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">ZiTeng Trading</h3>
            <p className="text-gray-400">
              {t.footerRefurbishingCenter}<br/>
              {t.footerLAFacilityCapacity}
            </p>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">{t.footerQuickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t.home}</a></li>
              <li><a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors duration-300">{t.ourServices}</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors duration-300">{t.whyChooseUs}</a></li>
              <li><a href="#who-we-serve" className="text-gray-400 hover:text-white transition-colors duration-300">{t.whoWeServe}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">{t.contactUs}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">{t.footerContactInformation}</h3>
            <p className="text-gray-400">
              {t.footerEmail}：support@rebornebike.com<br/>
              {t.footerPhone}：+1-XXX-XXX-XXXX<br/>
              {/* Optional: Add a link to a contact form/WeChat QR Code/WhatsApp as suggested in doc */}
              <a href="#" className="text-blue-400 hover:underline">{t.contactForm}</a>
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 text-sm px-4 md:px-8">
          &copy; {new Date().getFullYear()} ZiTeng Trading. {t.footerAllRightsReserved}
        </div>
      </footer>
    </div>
  );
};

// Single box component - unchanged functionality
const BoxItem = ({ title, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        flex-1 flex flex-col justify-between items-center p-6
        bg-white rounded-xl shadow-md cursor-pointer
        border-2 transition-all duration-500 ease-in-out transform
        ${isActive ? 'border-blue-500 scale-105 shadow-xl' : 'border-gray-200 hover:border-gray-400 hover:shadow-lg'}
        ${isActive ? 'md:flex-[3]' : 'md:flex-[1]'} /* Desktop: active box becomes longer, others become shorter */
      `}
      onMouseEnter={onMouseEnter}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-700 whitespace-nowrap mb-4">
        {title}
      </h3>
    </div>
  );
};

export default App;
