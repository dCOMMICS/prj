class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_map<int, bool> my_map;

        for(int k: nums){
            my_map[k] = true;
            if(my_map.count(k-1) == 0){
                my_map[k-1] = false;
            }
        }

        int max_seq = 0; // Initialize max_seq to 0
        for(auto& it: my_map){
            if(!it.second){
                int n = it.first + 1;
                int c = 0;
                while(my_map[n]){
                    n++;
                    c++;
                }
                max_seq = max(max_seq, c);
            }
        }
        
        return max_seq;
    }
};



// 


