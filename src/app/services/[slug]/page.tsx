import { notFound } from 'next/navigation';

// Service data with detailed information
const serviceDetails = {
  'ai-matching': {
    title: 'オーダー×物件 AIマッチング',
    description: 'AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。',
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    systemFlow: {
      title: '運用フロー',
      steps: [
        '物件データを登録（※御社システムからの自動連携も可能）',
        '顧客からのオーダーを入力',
        'AIが全データに対し自動でマッチ度を判定',
        '新たにマッチングが発生した物件について、担当者にメール通知',
        'ご案内メール作成'
      ]
    },
    features: [
      {
        image: '/images/ai-matching-flexible.jpg',
        title: 'AIによる柔軟なマッチング',
        description: '従来では事前に設定された項目単位でしか絞り込みができなかったのに対し、AIによるマッチングではメモ書きなどの意味を理解して設定項目にない内容も加味したマッチ度を独自に計算します。'
      },
      {
        image: '/images/ai-matching-notification.jpg',
        title: 'メール通知機能',
        description: 'マッチしたオーダー・物件の担当者に、毎朝メールで提案すべき物件・案件を通知します。これにより、抜け漏れを防止できます。'
      },
      {
        image: '/images/ai-matching-ocr.jpg',
        title: 'OCRを活用したスムーズなデータ入力',
        description: 'システム導入時にハードルとなるデータ入力も、マイソクのPDFをアップロードするだけでAIが内容を読み取り、簡単に入力できます。'
      },
      {
        image: '/images/ai-matching-email.jpg',
        title: 'お客様へのご案内メール送信',
        description: 'マッチングした物件から、簡単にお客様へのご案内メールを作成できます。物件データやマイソクのPDFは自動で転記されます。'
      }
    ]
  },
  'price-prediction': {
    title: '不動産価格予測モデル',
    description: 'AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。',
    gradient: 'from-blue-500 to-blue-600',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    systemFlow: {
      title: '運用フロー',
      steps: [
        '過去の成約データを登録',
        'AIが学習',
        '条件を入力し、適切な価格を予測'
      ]
    },
    features: [
      {
        image: '/images/price-prediction-custom.jpg',
        title: '独自の予測モデルを構築',
        description: 'REINS等に公開された実績データに加え、御社の過去データを使用し、御社が得意とする領域に特化した独自の予測モデルを構築可能'
      },
      {
        image: '/images/price-prediction-shap.jpg',
        title: '各要素の影響度を可視化',
        description: '予測モデルが出した結果に対し、どの要素がどれくらい影響を与えたかを定量的に可視化。これにより、営業担当者による交渉や金額の微調整にも強いデータが入手可能。'
      },
      {
        image: '/images/price-prediction-auto.jpg',
        title: '学習の自動化',
        description: '最新のデータを常に学習し、直近の市場動向を反映した予測結果が入手可能。'
      }
    ]
  },
  'ocr-system': {
    title: 'マイソクOCR',
    description: 'どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。',
    gradient: 'from-purple-500 to-purple-600',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    systemFlow: {
      title: '運用フロー',
      steps: [
        'マイソクPDFをアップロード',
        'AIが内容を読み取り表形式で表示',
        'ユーザーが内容を確認して、修正',
        'csv等のデータとして出力'
      ]
    },
    features: [
      {
        image: '/images/ocr-flexible.jpg',
        title: 'AIが任意のフォーマットに対応',
        description: '従来のOCRでは、事前にフォーマットを指定する必要があったため、新しいフォーマットへはすぐに対応できなかったのに対し、AIによるOCRではAIがフォーマットを自動で判定するため、フォーマットの変更や、他社のマイソクフォーマットにも柔軟に対応可能です。'
      },
      {
        image: '/images/ocr-edit.jpg',
        title: '画面上ですぐにデータ修正',
        description: 'AIによる読み取り結果はすぐに表形式で表示され、アップロードしたPDFを画面上で確認しながらすぐに修正することができます。'
      },
      {
        image: '/images/ocr-csv.jpg',
        title: 'CSVによる出力',
        description: '読み取ったデータはCSVとして出力され、各システムへの連携が可能です。出力フォーマットは、柔軟に対応可能です。'
      }
    ]
  },
  'sales-analysis': {
    title: '営業トークの見える化',
    description: 'Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。',
    gradient: 'from-orange-500 to-orange-600',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
    systemFlow: {
      title: '運用フロー',
      steps: [
        '営業中の会話を録音',
        'AIが内容を聞き取り文字起こし',
        '内容と営業の成果を学習',
        '分析'
      ]
    },
    features: [
      {
        image: '/images/sales-visualization.jpg',
        title: '営業トークの見える化',
        description: 'AIが営業の録音データから自動で文字起こしし、これまでブラックボックスであった営業内容を可視化できます。'
      },
      {
        image: '/images/sales-analysis-result.jpg',
        title: '成約結果と紐づけて営業トークの定量的な振り返りが可能',
        description: '成約率が高かった営業トークから、特徴的な内容や言葉遣いをAIが抽出。営業力の底上げにつながります。'
      }
    ]
  },
  'reins-csv': {
    title: 'REINS CSV化ツール',
    description: 'ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。',
    gradient: 'from-teal-500 to-teal-600',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
    systemFlow: {
      title: '運用フロー',
      steps: [
        'REINSで条件検索',
        '検索結果を印刷表示',
        '表示結果をコピー',
        'CSVに変換してダウンロード'
      ]
    },
    features: [
      {
        image: '/images/reins-csv-convert.jpg',
        title: 'CSV化',
        description: 'REINSの物件データはCSVダウンロードができないため、自社システムへの連携が困難。本システムにより、REINSデータをCSV化することによって、自社システムへの連携が可能です。'
      },
      {
        image: '/images/reins-simple-operation.jpg',
        title: '画面上で簡単操作',
        description: 'WEB画面上の操作のみで簡単にCSV化が可能。変換スピードも速く、すぐにCSVが手に入ります。'
      }
    ]
  },
  'ai-chatbot': {
    title: '社内版AIチャットボット（RAG）',
    description: 'RAG技術で社内情報をAIに記憶。「XXへ〇〇の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。',
    gradient: 'from-indigo-500 to-indigo-600',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    systemFlow: {
      title: '運用フロー',
      steps: [
        'ユーザーが質問を入力',
        '専用チャットボットが社内ドキュメントやLLM未学習の外部情報を検索',
        '検索結果を取得',
        '質問内容と取得情報をLLMに入力',
        'LLMが情報をもとに回答を生成',
        'チャットボットが回答を出力'
      ]
    },
    features: [
      {
        image: '/images/chatbot-search-speed.jpg',
        title: '膨大な社内文書の検索をスピード化',
        description: '社内に大量に存在する文書データから、特定の内容を探し出す作業は煩雑かつ困難。AIが自動で社内文書を検索することにより、煩わしい作業から解放されます。'
      },
      {
        image: '/images/chatbot-ai-generation.jpg',
        title: '生成AIが内容を理解し欲しい回答を即座に生成',
        description: 'ただ社内文書を検索するだけではなく、AIが質問の意図と社内文書の内容を理解して、あなたの欲しい回答を即座に生成します。'
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${service.gradient} text-white py-20 lg:py-28`}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* System Flow Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {service.systemFlow.title}
              </h2>
            </div>

            <div className="space-y-8">
              {service.systemFlow.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <p className="text-slate-800 font-medium">{step}</p>
                    </div>
                  </div>
                  {index < service.systemFlow.steps.length - 1 && (
                    <div className="w-full flex justify-center my-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0l7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                特徴
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Feature Image */}
                  <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-lg`}>
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    {/* Placeholder for actual image */}
                    <div className="absolute bottom-3 right-3 text-xs text-slate-500 bg-white/90 px-3 py-1.5 rounded-md font-mono">
                      {feature.image}
                    </div>
                  </div>
                  
                  {/* Feature Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            このサービスについてお問い合わせ
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            詳細な資料やデモのご希望、導入に関するご相談はお気軽にお問い合わせください
          </p>
          <a
            href="/contact"
            className={`inline-block bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]`}
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </>
  );
}