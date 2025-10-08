export interface ContactSubject {
  value: string;
  label: string;
}

export const CONTACT_SUBJECTS: ContactSubject[] = [
  { value: "consultation", label: "開発相談" },
  { value: "project", label: "プロジェクト依頼" },
  { value: "partnership", label: "パートナーシップ" },
  { value: "recruit", label: "サービス導入のご相談" },
  { value: "others", label: "資料請求" },
  { value: "other", label: "その他" },
];

export const getSubjectLabel = (value: string): string => {
  const subject = CONTACT_SUBJECTS.find((s) => s.value === value);
  return subject ? subject.label : value;
};
