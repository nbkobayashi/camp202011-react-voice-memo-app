interface VoiceInfo {
  title: string;
  uri: string; // 音声ファイルのパス
  createdAt: string; // 作成時刻
}

// 画面が指定した2つ以外に入らないように型を用意
type RootStackParamList = {
  RecScreen: undefined;
  VoiceListScreen: undefined;
};
