'use client'




// めも
// labelの方がpタグより良い理由
// label vs pタグ：

// labelを使う利点：

// アクセシビリティの向上（スクリーンリーダー対応）
// クリックでinputにフォーカス可能
// セマンティック的に正しい


// ただし、単なる見出しならpでも問題ない

// [&>div]:で一括で入れらる。メモ参照。

export default function Page() { 
  return (

  <div className="container p-6">
    <form className="max-w-md mx-auto p-4 bg-black/20 text-white
      flex flex-col gap-4">
    
      <h1 className="text-xl font-bold">Inquiry form</h1>
      <div className="flex flex-col">
        <label>Name</label>
        <input
          placeholder="ryoma taguchi"
          className="border"
        />
      </div>
      <div className="flex flex-col">
        <label>Mail Address</label>
        <input 
          className="border"
        />
      </div>
      <div className="flex flex-col">
        <label>title</label>
        <input 
          className="border"
        />
      </div>
      <div className="flex flex-col">
        <label>inquiry</label>
        <textarea
          className="border"
        />
      </div>

      <div>
        <button className="w-full rounded-sm bg-blue-300">
          Send
        </button>
      </div>

    </form>
  </div>
  
  )
}